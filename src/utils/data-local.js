const getData = () => {
  return {
    status: "success",
    message: "ok",
    data: {
      ads: [
        {
          id: "ad-1",
          ownerId: "users-1",
          createdAt: "2023-10-01T07:00:00.000Z",
          title: "Used Bicycle for Sale",
          description: "A well-maintained bicycle, perfect for city commuting.",
          category: "Bicycles",
          location: "San Francisco, CA",
          price: 1500000, // Price in IDR
          images: [
            "https://picsum.photos/200/300?random=1",
            "https://picsum.photos/200/300?random=2",
            "https://picsum.photos/200/300?random=3",
            "https://picsum.photos/200/300?random=4",
            "https://picsum.photos/200/300?random=5",
            "https://picsum.photos/200/300?random=6",
            "https://picsum.photos/200/300?random=7",
            "https://picsum.photos/200/300?random=8",
            "https://picsum.photos/200/300?random=9",
            "https://picsum.photos/200/300?random=10",
          ],
        },
        {
          id: "ad-2",
          ownerId: "users-2",
          createdAt: "2023-10-02T08:00:00.000Z",
          title: "Vintage Camera",
          description:
            "A classic film camera in great condition, includes original case.",
          category: "Photography",
          location: "New York, NY",
          price: 2500000, // Price in IDR
          images: [
            "https://picsum.photos/200/300?random=11",
            "https://picsum.photos/200/300?random=12",
            "https://picsum.photos/200/300?random=13",
            "https://picsum.photos/200/300?random=14",
            "https://picsum.photos/200/300?random=15",
            "https://picsum.photos/200/300?random=16",
            "https://picsum.photos/200/300?random=17",
            "https://picsum.photos/200/300?random=18",
            "https://picsum.photos/200/300?random=19",
            "https://picsum.photos/200/300?random=20",
          ],
        },
        {
          id: "ad-3",
          ownerId: "users-3",
          createdAt: "2023-10-03T09:00:00.000Z",
          title: "Sofa Set for Sale",
          description:
            "Comfortable sofa set, lightly used, perfect for living room.",
          category: "Furniture",
          location: "Los Angeles, CA",
          price: 5000000, // Price in IDR
          images: [
            "https://picsum.photos/200/300?random=21",
            "https://picsum.photos/200/300?random=22",
            "https://picsum.photos/200/300?random=23",
            "https://picsum.photos/200/300?random=24",
            "https://picsum.photos/200/300?random=25",
            "https://picsum.photos/200/300?random=26",
            "https://picsum.photos/200/300?random=27",
            "https://picsum.photos/200/300?random=28",
            "https://picsum.photos/200/300?random=29",
            "https://picsum.photos/200/300?random=30",
          ],
        },
        {
          id: "ad-4",
          ownerId: "users-4",
          createdAt: "2023-10-04T10:00:00.000Z",
          title: "Gaming Console",
          description:
            "Used gaming console with two controllers and several games.",
          category: "Electronics",
          location: "Chicago, IL",
          price: 3000000, // Price in IDR
          images: [
            "https://picsum.photos/200/300?random=31",
            "https://picsum.photos/200/300?random=32",
            "https://picsum.photos/200/300?random=33",
            "https://picsum.photos/200/300?random=34",
            "https://picsum.photos/200/300?random=35",
            "https://picsum.photos/200/300?random=36",
            "https://picsum.photos/200/300?random=37",
            "https://picsum.photos/200/300?random=38",
            "https://picsum.photos/200/300?random=39",
            "https://picsum.photos/200/300?random=40",
          ],
        },
        {
          id: "ad-5",
          ownerId: "users-5",
          createdAt: "2023-10-05T11:00:00.000Z",
          title: "Mountain Bike",
          description: "A sturdy mountain bike, ideal for off-road adventures.",
          category: "Bicycles",
          location: "Denver, CO",
          price: 2000000, // Price in IDR
          images: [
            "https://picsum.photos/200/300?random=41",
            "https://picsum.photos/200/300?random=42",
            "https://picsum.photos/200/300?random=43",
            "https://picsum.photos/200/300?random=44",
            "https://picsum.photos/200/300?random=45",
            "https://picsum.photos/200/300?random=46",
            "https://picsum.photos/200/300?random=47",
            "https://picsum.photos/200/300?random=48",
            "https://picsum.photos/200/300?random=49",
            "https://picsum.photos/200/300?random=50",
          ],
        },
        {
          id: "ad-6",
          ownerId: "users-6",
          createdAt: "2023-10-06T12:00:00.000Z",
          title: "Electric Guitar",
          description:
            "A beautiful electric guitar, perfect for beginners and pros alike.",
          category: "Musical Instruments",
          location: "Austin, TX",
          price: 3500000, // Price in IDR
          images: [
            "https://picsum.photos/200/300?random=51",
            "https://picsum.photos/200/300?random=52",
            "https://picsum.photos/200/300?random=53",
            "https://picsum.photos/200/300?random=54",
            "https://picsum.photos/200/300?random=55",
            "https://picsum.photos/200/300?random=56",
            "https://picsum.photos/200/300?random=57",
            "https://picsum.photos/200/300?random=58",
            "https://picsum.photos/200/300?random=59",
            "https://picsum.photos/200/300?random=60",
          ],
        },
        {
          id: "ad-7",
          ownerId: "users-7",
          createdAt: "2023-10-07T13:00:00.000Z",
          title: "Coffee Maker",
          description:
            "A high-quality coffee maker, perfect for brewing your morning coffee.",
          category: "Kitchen Appliances",
          location: "Seattle, WA",
          price: 1200000, // Price in IDR
          images: [
            "https://picsum.photos/200/300?random=61",
            "https://picsum.photos/200/300?random=62",
            "https://picsum.photos/200/300?random=63",
            "https://picsum.photos/200/300?random=64",
            "https://picsum.photos/200/300?random=65",
            "https://picsum.photos/200/300?random=66",
            "https://picsum.photos/200/300?random=67",
            "https://picsum.photos/200/300?random=68",
            "https://picsum.photos/200/300?random=69",
            "https://picsum.photos/200/300?random=70",
          ],
        },
        {
          id: "ad-8",
          ownerId: "users-8",
          createdAt: "2023-10-08T14:00:00.000Z",
          title: "Dining Table",
          description:
            "A beautiful wooden dining table, seats six comfortably.",
          category: "Furniture",
          location: "Miami, FL",
          price: 4500000, // Price in IDR
          images: [
            "https://picsum.photos/200/300?random=71",
            "https://picsum.photos/200/300?random=72",
            "https://picsum.photos/200/300?random=73",
            "https://picsum.photos/200/300?random=74",
            "https://picsum.photos/200/300?random=75",
            "https://picsum.photos/200/300?random=76",
            "https://picsum.photos/200/300?random=77",
            "https://picsum.photos/200/300?random=78",
            "https://picsum.photos/200/300?random=79",
            "https://picsum.photos/200/300?random=80",
          ],
        },
        {
          id: "ad-9",
          ownerId: "users-9",
          createdAt: "2023-10-09T15:00:00.000Z",
          title: "Smartphone",
          description: "A gently used smartphone with all the latest features.",
          category: "Electronics",
          location: "Boston, MA",
          price: 4000000, // Price in IDR
          images: [
            "https://picsum.photos/200/300?random=81",
            "https://picsum.photos/200/300?random=82",
            "https://picsum.photos/200/300?random=83",
            "https://picsum.photos/200/300?random=84",
            "https://picsum.photos/200/300?random=85",
            "https://picsum.photos/200/300?random=86",
            "https://picsum.photos/200/300?random=87",
            "https://picsum.photos/200/300?random=88",
            "https://picsum.photos/200/300?random=89",
            "https://picsum.photos/200/300?random=90",
          ],
        },
        {
          id: "ad-10",
          ownerId: "users-10",
          createdAt: "2023-10-10T16:00:00.000Z",
          title: "Lawn Mower",
          description:
            "A reliable lawn mower, perfect for keeping your yard tidy.",
          category: "Garden Equipment",
          location: "Phoenix, AZ",
          price: 1800000, // Price in IDR
          images: [
            "https://picsum.photos/200/300?random=91",
            "https://picsum.photos/200/300?random=92",
            "https://picsum.photos/200/300?random=93",
            "https://picsum.photos/200/300?random=94",
            "https://picsum.photos/200/300?random=95",
            "https://picsum.photos/200/300?random=96",
            "https://picsum.photos/200/300?random=97",
            "https://picsum.photos/200/300?random=98",
            "https://picsum.photos/200/300?random=99",
            "https://picsum.photos/200/300?random=100",
          ],
        },
      ],
    },
  };
};

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
        return '';
    }

    // Convert the number to a string and remove any decimals
    let numberString = amount.toString().split('.')[0];

    // Add the thousand separator
    let formatted = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    // Add the "Rp" prefix
    return "Rp " + formatted;
}

export { getData, postedAt, formatToRupiah };
