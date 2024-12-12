/* eslint-disable no-unused-vars */
const api = (() => {
  const BASE_URL = "http://localhost:3000";

  async function getAllAds() {
    const response = await fetch(`${BASE_URL}/ads`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { ads },
    } = responseJson;

    return ads;
  }

  async function getAdsSearch(search) {
    const response = await fetch(`${BASE_URL}/ads/search?search=${search}`);

    const responseJson = await response.json();
    console.log(responseJson);

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { ads },
    } = responseJson;

    return ads;
  }

  async function getAdsById(id) {
    const response = await fetch(`${BASE_URL}/ads/${id}`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { ads },
    } = responseJson;

    return ads;
  }

  async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/authentications`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { accessToken },
    } = responseJson;

    return accessToken;
  }

  async function getOwnProfile() {
    const response = await _fetchWithAuth(`${BASE_URL}/users/me`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { user },
    } = responseJson;

    return user;
  }

  function getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  async function registerUser({ email, password, name, location }) {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
        location: location,
      }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { userId },
    } = responseJson;

    return userId;
  }

  function base64ToFile(base64String, filename) {
    const arr = base64String.split(",");
    const mime = arr[0].match(/:(.*?);/)[1]; // Get the MIME type
    const b64Data = arr[1]; // Get the actual Base64 data

    // Decode the Base64 string
    const byteCharacters = atob(b64Data);
    const byteNumbers = new Array(byteCharacters.length);

    // Create a byte array
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    // Create a Blob from the byte array
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: mime });

    // Create a File object from the Blob
    const file = new File([blob], filename, { type: mime });

    return file;
  }

  async function postAds(data, images) {
    // Create a FormData object
    const formData = new FormData();
    console.log(data);

    // Append the ad details to the FormData object
    formData.append("data", JSON.stringify(data));

    // Append the images to the FormData object
    images.forEach((image, index) => {
      // Check if the image is a Base64 string
      if (typeof image === "string" && image.startsWith("data:")) {
        const filename = `image_${index}.png`; // You can customize the filename as needed
        const file = base64ToFile(image, filename);
        formData.append("images", file); // Append the File object
      } else {
        formData.append("images", image); // Append the image directly if it's already a File
      }
    });

    try {
      // Send the POST request to the backend
      const response = await fetch(`${BASE_URL}/ads`, {
        method: "POST",
        body: formData, // Use FormData as the body
        headers: {
          Authorization: `Bearer ${getAccessToken()}`, // Include authorization if needed
        },
      });

      // Parse the JSON response
      const responseJson = await response.json();

      // Check if the response is successful
      if (responseJson.status !== "success") {
        throw new Error(responseJson.message);
      }

      // Return the adsId from the response
      return responseJson.data.adsId;
    } catch (error) {
      console.error("Error posting ads:", error);
      throw error; // Rethrow the error for further handling
    }
  }

  async function editAds(data, images) {
    // Create a FormData object
    const formData = new FormData();
    console.log(data);

    // Append the ad details to the FormData object
    formData.append("data", JSON.stringify(data));

    // Append the images to the FormData object
    images.forEach((image, index) => {
      // Check if the image is a Base64 string
      if (typeof image === "string" && image.startsWith("data:")) {
        const filename = `image_${index}.png`; // You can customize the filename as needed
        const file = base64ToFile(image, filename);
        formData.append("images", file); // Append the File object
      } else {
        formData.append("images", image); // Append the image directly if it's already a File
      }
    });

    try {
      // Send the POST request to the backend
      const response = await fetch(`${BASE_URL}/ads`, {
        method: "PUT",
        body: formData, // Use FormData as the body
        headers: {
          Authorization: `Bearer ${getAccessToken()}`, // Include authorization if needed
        },
      });

      // Parse the JSON response
      const responseJson = await response.json();

      // Check if the response is successful
      if (responseJson.status !== "success") {
        throw new Error(responseJson.message);
      }

      // Return the adsId from the response
      return responseJson.data.adsId;
    } catch (error) {
      console.error("Error posting ads:", error);
      throw error; // Rethrow the error for further handling
    }
  }

  async function deleteAds(id) {
    try {
      const response = await fetch(`${BASE_URL}/ads/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${getAccessToken()}`, // Include authorization if needed
        },
      });

      // Parse the JSON response
      const responseJson = await response.json();

      // Check if the response is successful
      if (responseJson.status !== "success") {
        throw new Error(responseJson.message);
      }

      // Optionally return a success message or the deleted ad ID
      return responseJson.data.adsId; // Assuming the response contains the deleted ad ID
    } catch (error) {
      console.error("Error deleting ad:", error);
      throw error; // Rethrow the error for further handling
    }
  }

  async function getMyAds() {
    const response = await _fetchWithAuth(`${BASE_URL}/myads`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { ads },
    } = responseJson;

    return ads;
  }

  async function editProfile({ name, phone }) {
    try {
      // Prepare the request body only with provided fields
      const requestBody = {};
      if (name) requestBody.name = name;
      if (phone) requestBody.phone = phone;

      const response = await fetch(`${BASE_URL}/users/me`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
          "Content-Type": "application/json", // Ensure the content type is set
        },
        body: JSON.stringify(requestBody),
      });

      // Check if the response status is OK
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || "Failed to update profile");
      }

      // Parse the JSON response
      const responseJson = await response.json();

      // Check if the response is successful
      if (responseJson.status !== "success") {
        throw new Error(responseJson.message);
      }

      // Return the updated profile data or a success message
      return responseJson.data; // Assuming the response contains the updated profile data
    } catch (error) {
      console.error("Error updating profile:", error); // Updated error message
      throw error; // Rethrow the error for further handling
    }
  }

  async function postProfilePicture(imageFile) {
    const formData = new FormData();
    formData.append("file", imageFile);

    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${getAccessToken()}`, // Include authorization if needed
        },
        body: formData,
      });

      // Parse the JSON response
      const responseJson = await response.json();

      // Check if the response is successful
      if (responseJson.status !== "success") {
        throw new Error(responseJson.message);
      }

      // Optionally return a success message or the deleted ad ID
      return responseJson.data.adsId; // Assuming the response contains the deleted ad ID
    } catch (error) {
      console.error("Error deleting ad:", error);
      throw error; // Rethrow the error for further handling
    }
  }

  async function _fetchWithAuth(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }

  function putAccessToken(token) {
    localStorage.setItem("accessToken", token);
  }

  function postedAt(date) {
    const now = new Date();
    const posted = new Date(date);
    const diff = now - posted;
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diff / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diff / (1000 * 60));
    const diffSeconds = Math.floor(diff / 1000);

    if (diffDays > 0) {
      return `${diffDays} days ago`;
    }
    if (diffHours > 0) {
      return `${diffHours} hours ago`;
    }
    if (diffMinutes > 0) {
      return `${diffMinutes} minutes ago`;
    }
    if (diffSeconds > 0) {
      return `${diffSeconds} seconds ago`;
    }
    return "just now";
  }

  function formatToRupiah(amount) {
    // Ensure the amount is a number
    if (isNaN(amount)) {
      return "";
    }

    // Convert the number to a string and remove any decimals
    let numberString = amount.toString().split(".")[0];

    // Add the thousand separator
    let formatted = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    // Add the "Rp" prefix
    return "Rp " + formatted;
  }

  function formatDate(dateString) {
    const date = new Date(dateString);

    // Extract the components
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(date.getUTCDate()).padStart(2, "0");
    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    const seconds = String(date.getUTCSeconds()).padStart(2, "0");

    // Format the date
    //const formattedDate = `${year}/${month}/${day} - ${hours}:${minutes}:${seconds}`;
    const formattedDate = `${year}/${month}/${day}`;
    return formattedDate;
  }

  return {
    getAllAds,
    getAccessToken,
    putAccessToken,
    getAdsById,
    login,
    getOwnProfile,
    registerUser,
    postAds,
    getMyAds,
    postedAt,
    formatToRupiah,
    formatDate,
    editAds,
    deleteAds,
    postProfilePicture,
    editProfile,
    getAdsSearch,
  };
})();

export default api;
