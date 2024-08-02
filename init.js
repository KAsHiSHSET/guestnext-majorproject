const mongoose = require('mongoose');
const Listing = require('./model/listings');
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main().then(() => {
    console.log("Connected to DB");
}).catch(err => {
    console.error("Error connecting to DB:", err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}
// let allchats = [
//     // Villas
//     {
//         title: "Luxury Beachfront Villa",
//         description: "Situated on a pristine beach with golden sands, this villa offers direct access to the ocean and stunning, uninterrupted sea views. Features include a private infinity pool with ocean vistas, a spacious outdoor dining area perfect for sunset dinners, and elegant, open-plan living quarters that blend indoor and outdoor spaces seamlessly. Ideal for those seeking a luxurious seaside retreat with all the comforts of modern living.",
//         price: 800000,
//         location: "Malibu, CA, USA",
//         images: "https://unsplash.com/photos/a-group-of-benches-sitting-next-to-a-palm-tree-Sh-e1ze4-8k",
//         country: "USA",
//     },
//     {
//         title: "Mountain Retreat Villa",
//         description: "Nestled in the serene mountains, this villa offers breathtaking panoramic views of the rugged landscape and majestic peaks. The cozy interior features a grand fireplace for chilly evenings, a hot tub to unwind after a day of exploring, and a large deck designed for stargazing and enjoying the fresh mountain air. Perfect for those looking to escape city life and enjoy nature's tranquility in luxury.",
//         price: 600000,
//         location: "Aspen, CO, USA",
//         images: "https://images.unsplash.com/photo-1516748871718-e9df14d4d9d0?w=900&auto=format&fit=crop&q=60",
//         country: "USA",
//     },
//     {
//         title: "Tropical Island Villa",
//         description: "Located on a secluded island, this tropical villa offers an exotic escape with lush surroundings, a private lagoon, and open-air living spaces. Enjoy a private beach, an infinity pool overlooking turquoise waters, and a thatched-roof cabana for relaxing in paradise. Ideal for a romantic getaway or a private retreat with family or friends.",
//         price: 95000,
//         location: "Maldives",
//         images: "https://images.unsplash.com/photo-1549408546-6220b4d7a34b?w=900&auto=format&fit=crop&q=60",
//         country: "Maldives",
//     },
//     {
//         title: "Countryside Villa Retreat",
//         description: "Escape to this idyllic villa surrounded by rolling hills and lush gardens, providing a tranquil setting for relaxation. Enjoy the private pool, outdoor BBQ area, and plenty of space to unwind in a picturesque countryside setting. The villa offers a blend of modern amenities and natural beauty, making it a perfect retreat for families or groups seeking peace and rejuvenation.",
//         price: 450000,
//         location: "Napa Valley, CA, USA",
//         images: "https://images.unsplash.com/photo-1506748686214-2f006d11d12b?w=900&auto=format&fit=crop&q=60",
//         country: "USA",
//     },

//     // Homes
//     {
//         title: "Modern Urban Home",
//         description: "This sleek, modern home is located in the vibrant heart of the city, offering an open-plan living space with smart home technology and cutting-edge amenities. Enjoy the rooftop terrace with stunning city views, perfect for entertaining or relaxing. The home features floor-to-ceiling windows that fill the space with natural light, and a contemporary kitchen with top-of-the-line appliances. Ideal for urban explorers and city dwellers.",
//         price: 350000,
//         location: "New York, NY, USA",
//         images: "https://images.unsplash.com/photo-1506748686214e9df14d4d9d0?w=900&auto=format&fit=crop&q=60",
//         country: "USA",
//     },
//     {
//         title: "Cozy Countryside Cottage",
//         description: "A picturesque cottage tucked away in the charming countryside, offering a peaceful escape from the hustle and bustle. Features include a lush garden ideal for outdoor dining, a cozy fireplace for intimate evenings, and rustic décor that adds warmth and character. Perfect for those seeking a serene getaway with a touch of old-world charm and modern comforts.",
//         price: 200000,
//         location: "Cotswolds, UK",
//         images: "https://images.unsplash.com/photo-1506748686214e9df14d4d9d0?w=900&auto=format&fit=crop&q=60",
//         country: "UK",
//     },
//     {
//         title: "Stylish Coastal Home",
//         description: "This stylish coastal home offers breathtaking ocean views and a chic, open-plan interior. With a spacious deck for outdoor living, a modern kitchen, and bright, airy rooms, it's perfect for those looking to enjoy both luxury and comfort by the sea. The property also includes access to a private beach and nearby hiking trails.",
//         price: 500000,
//         location: "Santa Monica, CA, USA",
//         images: "https://images.unsplash.com/photo-1506748686214-2f006d11d12b?w=900&auto=format&fit=crop&q=60",
//         country: "USA",
//     },
//     {
//         title: "Elegant City Home",
//         description: "Located in the vibrant heart of the city, this modern home offers sleek interiors, a private garden, and easy access to local attractions. The home features a contemporary design with high-end finishes and a private outdoor space for relaxing after a day of exploring the city. Perfect for urban explorers who appreciate style and convenience.",
//         price: 320000,
//         location: "Toronto, Canada",
//         images: "https://images.unsplash.com/photo-1572298625723-0004c8d7c226?w=900&auto=format&fit=crop&q=60",
//         country: "Canada",
//     },
//     {
//         title: "Artistic Soho Loft",
//         description: "Experience the creative energy of Soho in this vibrant loft, featuring artistic décor, high ceilings, and large windows that bathe the space in natural light. The loft includes a unique blend of artistic elements and modern amenities, making it an ideal retreat for those who appreciate style and creativity. Perfect for a stylish stay in one of the city's most artistic neighborhoods.",
//         price: 400000,
//         location: "New York, NY, USA",
//         images: "https://images.unsplash.com/photo-1560845506-34ecb5467a10?w=900&auto=format&fit=crop&q=60",
//         country: "USA",
//     },

//     // Hawelis
//     {
//         title: "Opulent Rajasthani Haweli",
//         description: "Step into regal luxury with this traditional Rajasthani haweli, showcasing intricate carvings, lavish interiors, and lush gardens. The property includes a private pool and a range of services to enhance your stay, including traditional local cuisine and cultural experiences. Ideal for those who wish to immerse themselves in the opulence of Rajasthan while enjoying modern comforts.",
//         price: 50000,
//         location: "Jaipur, India",
//         images: "https://images.unsplash.com/photo-1556740749-7f8d8d4d4e2f?w=900&auto=format&fit=crop&q=60",
//         country: "India",
//     },
//     {
//         title: "Heritage Gujarati Haweli",
//         description: "This beautifully preserved Gujarati haweli offers a unique glimpse into traditional architecture and culture. The property features antique furnishings, a serene courtyard perfect for relaxation, and authentic local meals prepared by a private chef. Experience the charm and elegance of Gujarati heritage in a setting that combines historical ambiance with modern amenities.",
//         price: 400000,
//         location: "Ahmedabad, India",
//         images: "https://images.unsplash.com/photo-1506748686214e9df14d4d9d0?w=900&auto=format&fit=crop&q=60",
//         country: "India",
//     },
//     {
//         title: "Elegant Mughal Haweli",
//         description: "This stunning Mughal-style haweli is set amidst expansive gardens and boasts ornate interiors that reflect the grandeur of Mughal architecture. The property offers historical charm with luxurious touches, including elegant furnishings and traditional décor. Ideal for a lavish and culturally immersive experience, complete with serene garden spaces and bespoke services.",
//         price: 60000,
//         location: "Agra, India",
//         images: "https://images.unsplash.com/photo-1588058531600-5d0557b9be72?w=900&auto=format&fit=crop&q=60",
//         country: "India",
//     },
//     {
//         title: "Royal Rajput Haweli",
//         description: "Immerse yourself in the opulence of Rajputana with this stunning haweli featuring grand architecture, intricate woodwork, and regal interiors. Set in a sprawling estate with manicured gardens, it includes a private courtyard, a traditional dining hall, and luxurious suites that offer a blend of historical grandeur and modern amenities.",
//         price: 650000,
//         location: "Udaipur, India",
//         images: "https://images.unsplash.com/photo-1564036650-e8c98eaa8b28?w=900&auto=format&fit=crop&q=60",
//         country: "India",
//     },
//     {
//         title: "Elegant  Haweli",
//         description: "This stunning Mughal-style haweli is set amidst expansive gardens and boasts ornate interiors that reflect the grandeur of Mughal architecture. The property offers historical charm with luxurious touches, including elegant furnishings and traditional décor. Ideal for a lavish and culturally immersive experience, complete with serene garden spaces and bespoke services.",
//         price: 45000,
//         location: "Agra, India",
//         images: "https://images.unsplash.com/photo-1588058531600-5d0557b9be72?w=900&auto=format&fit=crop&q=60",
//         country: "India",
//     },
//     {
//         title: "Royal Mughal Haweli",
//         description: "Immerse yourself in the opulence of Rajputana with this stunning haweli featuring grand architecture, intricate woodwork, and regal interiors. Set in a sprawling estate with manicured gardens, it includes a private courtyard, a traditional dining hall, and luxurious suites that offer a blend of historical grandeur and modern amenities.",
//         price: 65000,
//         location: "Udaipur, India",
//         images: "https://images.unsplash.com/photo-1564036650-e8c98eaa8b28?w=900&auto=format&fit=crop&q=60",
//         country: "India",
//     }
// ];


// Listing.insertMany(allchats);
const allchats = [
    {
      title: "Cozy Beachfront Cottage",
      description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      images: 
         "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      
      price: 1500,
      location: "Malibu",
      country: "United States",
    },
    {
      title: "Modern Loft in Downtown",
      description:
        "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      images: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    
      price: 1200,
      location: "New York City",
      country: "United States",
    },
    {
      title: "Mountain Retreat",
      description:
        "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      images:"https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
     
      price: 1000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Historic Villa in Tuscany",
      description:
        "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      images:"https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
      price: 2500,
      location: "Florence",
      country: "Italy",
    },
    {
      title: "Secluded Treehouse Getaway",
      description:
        "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      images:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    
      price: 800,
      location: "Portland",
      country: "United States",
    },
    {
      title: "Beachfront Paradise",
      description:
        "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      images: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      
      price: 2000,
      location: "Cancun",
      country: "Mexico",
    },
    {
      title: "Rustic Cabin by the Lake",
      description:
        "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
      images: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
      price: 900,
      location: "Lake Tahoe",
      country: "United States",
    },
    {
      title: "Luxury Penthouse with City Views",
      description:
        "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
      images: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      
      price: 3500,
      location: "Los Angeles",
      country: "United States",
    },
    {
      title: "Ski-In/Ski-Out Chalet",
      description:
        "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
      images: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
      price: 3000,
      location: "Verbier",
      country: "Switzerland",
    },
    {
      title: "Safari Lodge in the Serengeti",
      description:
        "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
      images:"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    
      price: 4000,
      location: "Serengeti National Park",
      country: "Tanzania",
    },
    {
      title: "Historic Canal House",
      description:
        "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
      images:"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      
      price: 1800,
      location: "Amsterdam",
      country: "Netherlands",
    },
    {
      title: "Private Island Retreat",
      description:
        "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
      images:"https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      
      price: 10000,
      location: "Fiji",
      country: "Fiji",
    },
    {
      title: "Charming Cottage in the Cotswolds",
      description:
        "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
      images:"https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      
      price: 1200,
      location: "Cotswolds",
      country: "United Kingdom",
    },
    {
      title: "Historic Brownstone in Boston",
      description:
        "Step back in time in this elegant historic brownstone located in the heart of Boston.",
      images:"https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
      price: 2200,
      location: "Boston",
      country: "United States",
    },
    {
      title: "Beachfront Bungalow in Bali",
      description:
        "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
      images:"https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      
      price: 1800,
      location: "Bali",
      country: "Indonesia",
    },
    {
      title: "Mountain View Cabin in Banff",
      description:
        "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
      images:"https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
      price: 1500,
      location: "Banff",
      country: "Canada",
    },
    {
      title: "Art Deco Apartment in Miami",
      description:
        "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
      images:"https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
      price: 1600,
      location: "Miami",
      country: "United States",
    },
    {
      title: "Tropical Villa in Phuket",
      description:
        "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
      images:"https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
      price: 3000,
      location: "Phuket",
      country: "Thailand",
    },
    {
      title: "Historic Castle in Scotland",
      description:
        "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
      images:"https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      
      price: 4000,
      location: "Scottish Highlands",
      country: "United Kingdom",
    },
    {
      title: "Desert Oasis in Dubai",
      description:
        "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
      images:"https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      
      price: 5000,
      location: "Dubai",
      country: "United Arab Emirates",
    },
    {
      title: "Rustic Log Cabin in Montana",
      description:
        "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
      images:"https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
      price: 1100,
      location: "Montana",
      country: "United States",
    },
    {
      title: "Beachfront Villa in Greece",
      description:
        "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
      images:"https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      
      price: 2500,
      location: "Mykonos",
      country: "Greece",
    },
    {
      title: "Eco-Friendly Treehouse Retreat",
      description:
        "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
      images:"https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      
      price: 750,
      location: "Costa Rica",
      country: "Costa Rica",
    },
    {
      title: "Historic Cottage in Charleston",
      description:
        "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
      images:"https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
      price: 1600,
      location: "Charleston",
      country: "United States",
    },
    {
      title: "Modern Apartment in Tokyo",
      description:
        "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
      images: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
      price: 2000,
      location: "Tokyo",
      country: "Japan",
    },
    {
      title: "Lakefront Cabin in New Hampshire",
      description:
        "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
      images:"https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      
      price: 1200,
      location: "New Hampshire",
      country: "United States",
    },

    {
      title: "Luxury Villa in the Maldives",
      description:
        "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
      images:"https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      
      price: 6000,
      location: "Maldives",
      country: "Maldives",
    },
    
    {
      title: "Ski Chalet in Aspen",
      description:
        "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
      images: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      
      price: 4000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Secluded Beach House in Costa Rica",
      description:
        "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
      images:"https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      
      price: 1800,
      location: "Costa Rica",
      country: "Costa Rica",
    },
  ];
  
  Listing.insertMany(allchats);