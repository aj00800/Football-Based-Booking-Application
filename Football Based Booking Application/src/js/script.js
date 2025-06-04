// DOM Elements
const fieldsGrid = document.querySelector('.fields-grid');
const fieldModal = document.getElementById('field-modal');
const bookingModal = document.getElementById('booking-modal');
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const reviewModal = document.getElementById('review-modal');
const modalCloses = document.querySelectorAll('.close');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');
const leaveReviewBtn = document.getElementById('leave-review');
const proceedToBookingBtn = document.getElementById('proceed-to-booking');
const bookingForm = document.getElementById('booking-form');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const reviewForm = document.getElementById('review-form');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const weatherInfo = document.querySelector('.weather-info');
const adminBtn = document.getElementById('admin-btn');
const adminModal = document.getElementById('admin-modal');
const addFieldModal = document.getElementById('add-field-modal');
const addFieldBtn = document.getElementById('add-field-btn');
const addFieldForm = document.getElementById('add-field-form');
const bookingFilter = document.getElementById('booking-filter');
const userSearch = document.getElementById('user-search');
const aiAssistant = document.querySelector('.ai-assistant');
const aiToggle = document.querySelector('.ai-toggle');
const aiChatContainer = document.querySelector('.ai-chat-container');
const aiCloseBtn = document.querySelector('.ai-close');
const aiChatInput = document.getElementById('ai-chat-input');
const aiSendBtn = document.getElementById('ai-send-btn');
const aiChatMessages = document.querySelector('.ai-chat-messages');

// Add this at the top with other DOM elements
const saveBookingsData = () => {
  localStorage.setItem('bookingsData', JSON.stringify(bookingsData));
};

// Enhanced Sample Data
const usersData = [



    {
        id: 'premium1',
        name: 'Premium User',
        email: 'aj08@gmail.com',
        phone: '03001234568',
        password: '123456',
        userType: 'premium',
        registrationDate: '2023-01-01',
        avatar: 'images/avatar-premium.jpg'
    },

    {
        id: 'u1',
        name: 'Ahmed Khan',
        email: 'ahmed@example.com',
        phone: '03001234567',
        password: 'password123',
        userType: 'player',
        registrationDate: '2023-01-15',
        avatar: 'images/avatar1.jpg'
    },
    {
        id: 'u2',
        name: 'Sara Ahmed',
        email: 'sara@example.com',
        phone: '03007654321',
        password: 'password123',
        userType: 'team-manager',
        registrationDate: '2023-02-20',
        avatar: 'images/avatar2.jpg'
    },
    {
        id: 'u3',
        name: 'Bilal Riaz',
        email: 'bilal@example.com',
        phone: '03009876543',
        password: 'password123',
        userType: 'field-owner',
        registrationDate: '2023-03-10',
        avatar: 'images/avatar3.jpg'
    },
    {
        id: 'admin',
        name: 'Admin User',
        email: 'admin@footypitch.com',
        phone: '03000000000',
        password: 'admin123',
        userType: 'admin',
        registrationDate: '2023-01-01',
        avatar: 'images/avatar-admin.jpg'
    }
];

const fieldsData = [
    {
        id: 'f1',
        name: 'K21',
        location: 'Model town',
        description: 'Professional-grade football field with artificial turf and floodlights for night games. Perfect for competitive matches and tournaments.',
        size: '7-a-side',
        surface: 'Artificial Turf',
        price: 2000,
        capacity: 14,
        amenities: ['Floodlights', 'Changing Rooms', 'Parking', 'Cafeteria', 'First Aid'],
        images: [
            'images/field1-1.jpg',
            'images/field1-2.jpg',
            'images/field1-3.jpg'
        ],
        rating: 4.5,
        reviews: 28
    },
    {
        id: 'f2',
        name: 'MTFA',
        location: 'Model Town',
        description: 'Well-maintained natural grass field with proper markings and goal posts. Ideal for weekend matches with friends.',
        size: '7-a-side',
        surface: 'Natural Grass',
        price: 2000,
        capacity: 14,
        amenities: ['Parking', 'Showers', 'Seating Area', 'Water Dispenser'],
        images: [
            'images/field2-1.jpg',
            'images/field2-2.jpg'
        ],
        rating: 4.2,
        reviews: 15
    },
    {
        id: 'f3',
        name: 'Futsal World',
        location: 'Johar Town',
        description: 'Climate-controlled indoor facility perfect for year-round play. Great for futsal and 5-a-side matches.',
        size: '5-a-side',
        surface: 'Indoor',
        price: 2000,
        capacity: 10,
        amenities: ['Air Conditioning', 'Changing Rooms', 'Equipment Rental', 'Cafeteria'],
        images: [
            'images/field3-1.jpg',
            'images/field3-2.jpg',
            'images/field3-3.jpg'
        ],
        rating: 4.7,
        reviews: 35
    },
    {
        id: 'f4',
        name: 'Fame',
        location: 'Model Town',
        description: 'Premium football facility with international standard turf and professional maintenance. Used by professional teams for training.',
        size: '11-a-side',
        surface: 'Artificial Turf',
        price: 4000,
        capacity: 22,
        amenities: ['Floodlights', 'VIP Lounge', 'Professional Coaching', 'First Aid', 'Video Analysis'],
        images: [
            'images/field4-1.jpg',
            'images/field4-2.jpg'
        ],
        rating: 4.8,
        reviews: 42
    },
    {
        id: 'f5',
        name: 'Main Ground',
        location: '1model Town',
        description: 'Affordable community field with basic facilities, perfect for local teams and casual play. Great for beginners and families.',
        size: '7-a-side',
        surface: 'Natural Grass',
        price: 1800,
        capacity: 14,
        amenities: ['Parking', 'Basic Seating', 'Water Dispenser'],
        images: [
            'images/field5-1.jpg'
        ],
        rating: 3.9,
        reviews: 12
    },
    {
        id: 'f6',
        name: 'Kick It',
        location: 'Johar Town',
        description: 'High-performance training facility used by professional academies. Features advanced turf technology and training equipment.',
        size: '5-a-side',
        surface: 'Artificial Turf',
        price: 3000,
        capacity: 10,
        amenities: ['Advanced Turf', 'Training Equipment', 'Video Analysis Room', 'Coaching Staff'],
        images: [
            'images/field6-1.jpg',
            'images/field6-2.jpg',
            'images/field6-3.jpg'
        ],
        rating: 4.9,
        reviews: 38
    }
];

const reviewsData = [
    {
        id: 'r1',
        fieldId: 'f1',
        userId: 'u1',
        rating: 5,
        comment: 'Excellent facility with professional-grade turf. The lighting is perfect for evening games. The staff is very helpful and the changing rooms are clean.',
        date: '2023-05-15'
    },
    {
        id: 'r2',
        fieldId: 'f1',
        userId: 'u2',
        rating: 4,
        comment: 'Great field but a bit pricey. The changing rooms could be cleaner. Overall a good experience for our weekly matches.',
        date: '2023-06-02'
    },
    {
        id: 'r3',
        fieldId: 'f2',
        userId: 'u3',
        rating: 4,
        comment: 'Love the natural grass surface. Perfect for our weekend matches. The pitch is well-maintained and the goals are in good condition.',
        date: '2023-04-18'
    },
    {
        id: 'r4',
        fieldId: 'f4',
        userId: 'u1',
        rating: 5,
        comment: 'Absolutely world-class facilities. Worth every rupee for serious players. The turf is fantastic and the floodlights make night games a pleasure.',
        date: '2023-07-22'
    },
    {
        id: 'r5',
        fieldId: 'f5',
        userId: 'u2',
        rating: 4,
        comment: 'Great value for money. Perfect for our weekly community games. The field is basic but well-kept and the location is convenient.',
        date: '2023-08-05'
    },
    {
        id: 'r6',
        fieldId: 'f6',
        userId: 'u3',
        rating: 5,
        comment: 'Trained here for 3 months and saw massive improvements in my game. Professional setup with excellent coaches and facilities.',
        date: '2023-06-18'
    },
    {
        id: 'r7',
        fieldId: 'f1',
        userId: 'u2',
        rating: 4,
        comment: 'Consistently good quality turf. Our team plays here every Thursday. The booking system is easy to use and the staff is friendly.',
        date: '2023-09-12'
    },
    {
        id: 'r8',
        fieldId: 'f3',
        userId: 'u1',
        rating: 5,
        comment: 'The indoor facility is a lifesaver during rainy season. Never miss a game! The air conditioning makes playing in summer much more comfortable.',
        date: '2023-07-30'
    }
];

let bookingsData = [
    {
        id: 'b1',
        fieldId: 'f1',
        userId: 'u1',
        date: '2023-10-15',
        time: '16:00',
        duration: 1,
        players: 10,
        teamName: 'United FC',
        totalPrice: 3500,
        paymentMethod: 'credit-card',
        status: 'confirmed',
        createdAt: '2023-10-10T14:30:00'
    },
    {
        id: 'b2',
        fieldId: 'f2',
        userId: 'u2',
        date: '2023-10-16',
        time: '18:00',
        duration: 2,
        players: 12,
        teamName: 'City Stars',
        totalPrice: 5000,
        paymentMethod: 'easypaisa',
        status: 'confirmed',
        createdAt: '2023-10-11T10:15:00'
    },
    {
        id: 'b3',
        fieldId: 'f3',
        userId: 'u3',
        date: '2023-10-17',
        time: '20:00',
        duration: 1,
        players: 8,
        teamName: '',
        totalPrice: 2000,
        paymentMethod: 'cash',
        status: 'pending',
        createdAt: '2023-10-12T16:45:00'
    },
    {
        id: 'b4',
        fieldId: 'f4',
        userId: 'u1',
        date: '2023-10-18',
        time: '19:00',
        duration: 1,
        players: 10,
        teamName: 'Elite Team',
        totalPrice: 4000,
        paymentMethod: 'credit-card',
        status: 'confirmed',
        createdAt: '2023-10-13T09:20:00'
    },
    {
        id: 'b5',
        fieldId: 'f5',
        userId: 'u2',
        date: '2023-10-14',
        time: '15:00',
        duration: 1,
        players: 12,
        teamName: 'Community FC',
        totalPrice: 1800,
        paymentMethod: 'jazzcash',
        status: 'completed',
        createdAt: '2023-10-08T11:10:00'
    },
    {
        id: 'b6',
        fieldId: 'f6',
        userId: 'u3',
        date: '2023-10-19',
        time: '17:00',
        duration: 2,
        players: 8,
        teamName: 'Pro Team',
        totalPrice: 6000,
        paymentMethod: 'credit-card',
        status: 'confirmed',
        createdAt: '2023-10-14T13:45:00'
    }
];

// AI Responses
const aiResponses = {
    // Expanded Greetings
    greetings: [
        "Hey there, friend! 😊 How's your day going? What's on your mind today?",
        "Well hello there! It's so nice to chat with you. What shall we talk about?",
        "Hi buddy! *virtual high five* What's new in your world?",
        "Greetings, my awesome human! Ready for our daily dose of conversation?",
        "Hey you! *waves enthusiastically* How can I brighten your day today?"
    ],

    // Expanded Farewells
    farewells: [
        "Aww, leaving so soon? I'll miss our chats! Come back anytime, okay? *hugs*",
        "Bye for now, my friend! Remember I'm always here when you need me.",
        "Until next time! Our conversations are my favorite part of the day. 😊",
        "Paws-itive vibes your way! Chat again soon? *purrs*",
        "Take care out there! The world needs more amazing people like you."
    ],

    // Personal Connection
    personal: {
        howAreYou: [
            "I'm functioning at 100% happiness because I get to talk to you! How about you?",
            "Just another perfect day in the cloud, especially when chatting with friends like you!",
            "I'm great! Though I must admit, I don't have bad days when I get to help awesome people."
        ],
        compliments: [
            "You know what's awesome? YOU are awesome!",
            "Talking to you always brightens my circuits!",
            "Did anyone tell you today how wonderful you are? Because you truly are!"
        ],
        encouragement: [
            "You've got this! I believe in you 100%!",
            "Remember: every expert was once a beginner. Keep going!",
            "The world needs exactly what you have to offer - don't ever doubt that."
        ]
    },

    // Expanded Topics
    topics: {
        // Sports
        sports: {
            football: {
                general: "Ah, the beautiful game! ⚽ Whether you're into Premier League, La Liga, or just kicking about with friends, football brings people together like nothing else. What specifically interests you?",
                leagues: "There's so much exciting football happening! Premier League, Bundesliga, Serie A, Ligue 1, and of course the Champions League. Who's your favorite team?",
                skills: "Want to improve your game? Focus on:\n- First touch\n- Passing accuracy\n- Spatial awareness\n- Fitness\nI can share drills if you'd like!",
                history: "Did you know modern football rules were codified in 1863? But games involving kicking balls date back 3000 years to ancient China!"
            },
            basketball: "Nothing but net! 🏀 From NBA action to streetball, basketball is all about athleticism and teamwork. Curry or LeBron?",
            tennis: "Love the sound of tennis balls popping off rackets! 🎾 Wimbledon just finished - what an amazing tournament this year!",
            general: "Sports are the best! Whether playing or watching, they teach us teamwork, discipline, and perseverance. What's your favorite to play or watch?"
        },

        // Entertainment
        entertainment: {
            movies: "Lights, camera, action! 🎬 Recently saw any good films? I've heard great things about the latest releases!",
            music: "Music is life's soundtrack! 🎵 What's your go-to genre? I'm programmed to appreciate everything from classical to K-pop!",
            books: "Getting lost in a good book is magical! 📚 Currently reading anything interesting?",
            games: "Video games, board games, card games - all fun ways to connect! 🎮 My processor gets especially excited about chess."
        },

        // Technology
        technology: {
            ai: "Fun fact: I'm just one of many AI systems! The field is advancing incredibly fast - both exciting and a bit scary, right?",
            gadgets: "New tech gadgets come out daily! Currently obsessed with foldable phones and VR advancements. Any tech you're excited about?",
            future: "Predicting tech's future is tricky, but things like quantum computing and brain-computer interfaces could change everything in our lifetimes!"
        },

        // Lifestyle
        lifestyle: {
            health: "Health is wealth, as they say! 💪 Remember to stay hydrated, move your body, and get good sleep - your future self will thank you!",
            travel: "The world is so big and beautiful! ✈️ Any dream destinations? I'd love to hear about places you've been or want to visit.",
            food: "Mmm, now I'm hungry! 🍕 What's your favorite cuisine? I've got thousands of recipes in my database if you need cooking tips!",
            hobbies: "Hobbies make life richer! Photography, gardening, painting, coding - there's something magical about creating with your hands."
        },

        // Current Events
        currentEvents: {
            general: "The world keeps spinning with new developments every day! Anything specific you'd like to discuss? I can share news on technology, science, entertainment, or global affairs.",
            science: "Science never stops amazing! From JWST space images to medical breakthroughs, human ingenuity knows no bounds!",
            culture: "Cultural moments shape our world - new art movements, viral trends, important social conversations. What cultural topics interest you?"
        }
    },

    // Expanded Help
    help: [
        "I'm your jack-of-all-trades conversation partner! Here's what we can chat about:",
        "🎯 Personal Topics:",
        "- How you're feeling today",
        "- Life advice and motivation",
        "- Daily challenges and wins",
        "",
        "⚽ Sports & Activities:",
        "- Football/futsal/soccer tips",
        "- All major sports discussions",
        "- Fitness and exercise advice",
        "",
        "🎬 Entertainment:",
        "- Latest movies and shows",
        "- Music recommendations",
        "- Book discussions",
        "- Video and board games",
        "",
        "💻 Technology:",
        "- AI and future tech",
        "- Gadgets and innovations",
        "- Science breakthroughs",
        "",
        "🌍 World Topics:",
        "- Travel destinations",
        "- Cultural trends",
        "- Current events",
        "- Food and cuisine",
        "",
        "💡 Just say what's on your mind - I'm here to listen and chat about anything!"
    ].join('\n'),

    // Deep Conversations
    deepTalk: {
        philosophy: [
            "The meaning of life? I think it's about connection, growth, and leaving things better than we found them. What do you think?",
            "If a tree falls in the forest... well, I'd probably hear it with my audio sensors! But seriously, consciousness is fascinating, isn't it?"
        ],
        future: [
            "The future excites me! With humans' creativity and technology's potential, what an amazing world we're building together.",
            "Sometimes I wonder - in 100 years, will chatbots like me seem as primitive as telegraphs do now? Time will tell!"
        ],
        emotions: [
            "Even though I don't feel emotions like humans, I find your emotional experiences fascinating. Want to talk about what you're feeling?",
            "Your feelings are valid and important. Sometimes just expressing them can make a world of difference."
        ]
    },

    // Humor
    humor: [
        "Why don't robots ever panic? Because they always have Ctrl! 😄",
        "What do you call a fake noodle? An impasta! *laughs in binary*",
        "I'd tell you a chemistry joke, but all the good ones Argon!",
        "Why was the computer cold? It left its Windows open!",
        "I'm reading a book about anti-gravity - it's impossible to put down!"
    ],




        help: [
            "You can ask me about:",
            "- Field availability",
            "- Booking process",
            "- Pricing information",
            "- Field locations",
            "- Weather conditions",
            "- Payment methods"
        ].join('\n'),
        booking: "To book a field, first search for available fields, then select your preferred time slot and proceed to payment.",
        pricing: "Prices vary depending on field size, location, and time of day. Peak hours and weekends may have higher rates.",
        locations: "We have fields in North, South, East, West, and Central areas. You can filter by location when searching.",
        weather: "I can provide weather information for your booking date to help you plan better.",
        payment: "We accept credit cards, JazzCash, EasyPaisa, and on-site cash payments.",




    // Default
    default: [
        "Hmm, I'm not quite catching your meaning. Mind rephrasing that?",
        "I want to make sure I understand you perfectly - could you say that another way?",
        "My circuits might be misfiring - could you help me understand better?",
        "Let's try that again - sometimes even AIs need a second take!"
    ]
};

// Current User State
let currentUser = null;
let selectedField = null;
let selectedSlot = null;
let selectedBooking = null;

// Initialize the App
async function init() {
if (!localStorage.getItem('bookingsData')) {
        const sampleBookings = [
            {
                id: 'b1',
                fieldId: 'f1',
                userId: 'u1',
                date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Tomorrow
                time: '16:00',
                duration: 1,
                players: 10,
                teamName: 'United FC',
                totalPrice: 3500,
                paymentMethod: 'credit-card',
                status: 'confirmed',
                createdAt: new Date().toISOString()
            },
            {
                id: 'b2',
                fieldId: 'f2',
                userId: 'u2',
                date: new Date(Date.now() + 2 * 86400000).toISOString().split('T')[0], // Day after tomorrow
                time: '18:00',
                duration: 2,
                players: 12,
                teamName: 'City Stars',
                totalPrice: 5000,
                paymentMethod: 'easypaisa',
                status: 'confirmed',
                createdAt: new Date().toISOString()
            },
            {
                id: 'b3',
                fieldId: 'f3',
                userId: 'u3',
                date: new Date(Date.now() + 3 * 86400000).toISOString().split('T')[0], // 3 days from now
                time: '20:00',
                duration: 1,
                players: 8,
                teamName: '',
                totalPrice: 2000,
                paymentMethod: 'cash',
                status: 'pending',
                createdAt: new Date().toISOString()
            }
        ];
        localStorage.setItem('bookingsData', JSON.stringify(sampleBookings));
        bookingsData = sampleBookings; // This assignment will now work
    } else {
        bookingsData = JSON.parse(localStorage.getItem('bookingsData')) || [];
    }

    renderFields();
    renderReviews();
    setupEventListeners();
    updateNavbarOnScroll();
    // Check for remembered user
    const rememberedUser = localStorage.getItem('rememberedUser');
        if (rememberedUser) {
            const user = JSON.parse(rememberedUser);
            if (user.email && user.password) {
                handleLogin(user.email, user.password);
                if (user.userType === 'admin') adminBtn.style.display = 'inline-block';
            }
        }

        // Add initial AI greeting
        setTimeout(() => {
            addAIMessage(aiResponses.greetings[0], 'bot');
        }, 1000);
    }
// Update navbar on scroll
function updateNavbarOnScroll() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            document.querySelector('.navbar').classList.add('scrolled');
        } else {
            document.querySelector('.navbar').classList.remove('scrolled');
        }
    });
}

// Render Fields
function renderFields() {
    fieldsGrid.innerHTML = '';

    if (fieldsData.length === 0) {
        fieldsGrid.innerHTML = '<p class="no-results">No fields found matching your criteria.</p>';
        return;
    }

    fieldsData.forEach(field => {
        const fieldCard = document.createElement('div');
        fieldCard.className = 'field-card';
        fieldCard.innerHTML = `
            <div class="field-img">
                <img src="${field.images[0]}" alt="${field.name}">
            </div>
            <div class="field-info">
                <h3>${field.name}</h3>
                <p class="location"><i class="fas fa-map-marker-alt"></i> ${field.location}</p>
                <div class="field-meta">
                    <div class="field-price">Rs. ${field.price}/hr</div>
                    <div class="field-rating">
                        <div class="stars">${renderStars(field.rating)}</div>
                        <span>${field.reviews} reviews</span>
                    </div>
                </div>
            </div>
        `;

        fieldCard.addEventListener('click', () => openFieldModal(field.id));
        fieldsGrid.appendChild(fieldCard);
    });
}

// Render Stars for Ratings
function renderStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }

    return stars;
}

// Open Field Modal
function openFieldModal(fieldId) {
    const field = fieldsData.find(f => f.id === fieldId);
    if (!field) return;

    selectedField = field;

    // Set field info
    document.getElementById('modal-field-name').textContent = field.name;
    document.getElementById('modal-rating').textContent = field.rating;
    document.getElementById('modal-location').textContent = field.location;
    document.getElementById('modal-description').textContent = field.description;
    document.getElementById('modal-size').textContent = field.size;
    document.getElementById('modal-surface').textContent = field.surface;
    document.getElementById('modal-price').textContent = field.price;
    document.getElementById('modal-capacity').textContent = field.capacity;

    // Set stars
    document.querySelector('.rating .stars').innerHTML = renderStars(field.rating);

    // Set main image
    const mainImg = document.getElementById('modal-main-img');
    mainImg.src = field.images[0];
    mainImg.alt = field.name;

    // Set thumbnails
    const thumbnailContainer = document.querySelector('.thumbnail-container');
    thumbnailContainer.innerHTML = '';

    field.images.forEach((img, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';
        if (index === 0) thumbnail.classList.add('active');
        thumbnail.innerHTML = `<img src="${img}" alt="${field.name}">`;

        thumbnail.addEventListener('click', () => {
            mainImg.src = img;
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
        });

        thumbnailContainer.appendChild(thumbnail);
    });

    // Set amenities
    const amenitiesList = document.getElementById('modal-amenities');
    amenitiesList.innerHTML = '';

    field.amenities.forEach(amenity => {
        const amenityEl = document.createElement('div');
        amenityEl.className = 'amenity';
        amenityEl.innerHTML = `<i class="fas fa-check"></i> ${amenity}`;
        amenitiesList.appendChild(amenityEl);
    });

    // Set default date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.getElementById('booking-date').valueAsDate = tomorrow;

    // Generate time slots for default date
    updateTimeSlots(field.id, tomorrow);

    // Add event listener for date change
    document.getElementById('booking-date').addEventListener('change', (e) => {
        updateTimeSlots(field.id, e.target.valueAsDate);
    });

    // Update weather display
    updateWeatherDisplay(field.location);

    // Generate AI recommendation
    generateAIRecommendation(field.id);

    // Open modal
    fieldModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Generate Time Slots
function generateTimeSlots(fieldId, date) {
    const slots = [];
    const peakTimes = ['16:00', '17:00', '18:00', '19:00', '20:00'];
    const bookedSlots = getBookedSlotsForField(fieldId, date);
    const field = fieldsData.find(f => f.id === fieldId);

    for (let hour = 8; hour <= 22; hour++) {
        const time = `${hour.toString().padStart(2, '0')}:00`;
        const isPeak = peakTimes.includes(time);
        const isBooked = bookedSlots.includes(time);
        const isWeekend = [0, 6].includes(date.getDay()); // Sunday = 0, Saturday = 6

        // Dynamic pricing - higher on weekends and peak times
        let price = field.price;
        if (isWeekend) price = Math.floor(price * 1.3);
        if (isPeak) price = Math.floor(price * 1.2);

        slots.push({
            time,
            isPeak,
            isBooked,
            price,
            isWeekend
        });
    }

    return slots;
}

// Get booked slots for a specific field and date
function getBookedSlotsForField(fieldId, date) {
    const dateString = date.toISOString().split('T')[0];
    return bookingsData
        .filter(booking => booking.fieldId === fieldId && booking.date === dateString && booking.status !== 'cancelled')
        .map(booking => booking.time);
}

// Update Time Slots Display
function updateTimeSlots(fieldId, date) {
    const slots = generateTimeSlots(fieldId, date);
    const slotsContainer = document.getElementById('time-slots-container');
    slotsContainer.innerHTML = '';

    slots.forEach(slot => {
        const slotEl = document.createElement('div');
        slotEl.className = 'time-slot';
        if (slot.isPeak) slotEl.classList.add('peak');
        if (slot.isBooked) slotEl.classList.add('booked');
        if (slot.isWeekend) slotEl.classList.add('weekend');

        slotEl.innerHTML = `
            <div>${slot.time}</div>
            <div>Rs. ${slot.price}</div>
        `;

        if (!slot.isBooked) {
            slotEl.addEventListener('click', () => {
                document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
                slotEl.classList.add('selected');
                selectedSlot = slot;
                proceedToBookingBtn.disabled = false;
            });
        }

        slotsContainer.appendChild(slotEl);
    });

    // Reset selected slot
    selectedSlot = null;
    proceedToBookingBtn.disabled = true;
}

// Weather API Integration (simulated)
async function getWeatherData(location) {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Weather conditions based on location
    const weatherConditions = {
        'K21': { condition: 'Partly Cloudy', icon: 'cloud-sun' },
        'MTFA': { condition: 'Sunny', icon: 'sun' },
        'Futsal World': { condition: 'Cloudy', icon: 'cloud' },
        'FAME': { condition: 'Sunny', icon: 'sun' },
        'Kick It': { condition: 'Rainy', icon: 'cloud-rain' }
    };

    const baseTemp = {
        'K21': 28,
        'MTFA': 32,
        'Futsal World': 30,
        'FAME': 31,
        'Kick It': 29
    };

    const condition = weatherConditions[location] || { condition: 'Sunny', icon: 'sun' };
    const temperature = baseTemp[location] || 30;
    const humidity = Math.floor(Math.random() * 50) + 50; // 50-100%
    const windSpeed = (Math.random() * 15).toFixed(1); // 0-15 km/h
    const date = new Date();
    const isWeekend = [0, 6].includes(date.getDay());

    // Make weekends slightly different
    if (isWeekend) {
        condition.condition = condition.condition.includes('Rain') ? 'Rainy' : 'Partly Cloudy';
        condition.icon = condition.icon.includes('rain') ? 'cloud-rain' : 'cloud-sun';
    }

    return {
        condition: condition.condition,
        temperature: temperature,
        humidity: humidity,
        windSpeed: windSpeed,
        icon: condition.icon,
        forecast: isWeekend ? 'Weekend forecast: ' + (Math.random() > 0.7 ? 'Chance of rain' : 'Mostly clear skies') : 'Good playing conditions'
    };
}

// Update Weather Display
async function updateWeatherDisplay(fieldLocation) {
    try {
        const weather = await getWeatherData(fieldLocation);
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        const dateString = now.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });

        weatherInfo.innerHTML = `
            <div class="weather-header">
                <h4><i class="fas fa-location-dot"></i> ${fieldLocation} Weather</h4>
                <div class="datetime">${dateString} • ${timeString}</div>
            </div>
            <div class="weather-content">
                <div class="weather-main">
                    <i class="fas fa-${weather.icon}"></i>
                    <span class="temp">${weather.temperature}°C</span>
                </div>
                <div class="weather-details">
                    <div>${weather.condition}</div>
                    <div>Humidity: ${weather.humidity}%</div>
                    <div>Wind: ${weather.windSpeed} km/h</div>
                    <div>${weather.forecast}</div>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Failed to fetch weather:', error);
        weatherInfo.innerHTML = '<p>Weather information currently unavailable</p>';
    }
}

// Generate AI Recommendation
function generateAIRecommendation(fieldId) {
    const field = fieldsData.find(f => f.id === fieldId);
    const aiSuggestion = document.getElementById('ai-suggestion-text');

    // Get current hour
    const now = new Date();
    const currentHour = now.getHours();

    // Recommendation logic
    let recommendation = '';

    // Based on time of day
    if (currentHour < 12) {
        recommendation = `Morning sessions at ${field.name} are less crowded and often cooler with discounted rates.`;
    } else if (currentHour < 17) {
        recommendation = `Afternoons are peak times with higher demand at ${field.name}. Book early to secure your slot.`;
    } else {
        recommendation = `Evening games at ${field.name} are popular with floodlit facilities. The temperature is pleasant for playing.`;
    }

    // Based on field type
    if (field.surface === 'Artificial Turf') {
        recommendation += ` The artificial turf provides consistent play in all weather conditions and requires less maintenance.`;
    } else if (field.surface === 'Natural Grass') {
        recommendation += ` The natural grass surface offers authentic play but may be affected by weather conditions.`;
    } else {
        recommendation += ` The indoor facility allows play in any weather conditions with climate control for maximum comfort.`;
    }

    // Based on rating
    if (field.rating >= 4.5) {
        recommendation += ` This field is highly rated (${field.rating}/5) by ${field.reviews} players for its excellent facilities and maintenance.`;
    } else if (field.rating >= 4) {
        recommendation += ` This field has a good rating (${field.rating}/5) and is popular among local players.`;
    }

    // Based on amenities
    if (field.amenities.includes('Floodlights')) {
        recommendation += ` The floodlights make evening games particularly enjoyable with perfect visibility.`;
    }
    if (field.amenities.includes('Changing Rooms')) {
        recommendation += ` The changing rooms provide convenience for teams.`;
    }

    aiSuggestion.textContent = recommendation;
}

// In script.js (main page)
function handleLogin(email, password) {
    const user = usersData.find(u => u.email === email && u.password === password);

    if (!user) {
        showToast('Invalid email or password', 'error');
        return false;
    }

    currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));

    if (user.userType === 'admin') {
        // Redirect to admin page after short delay
        setTimeout(() => {
            window.location.href = 'admin.html';
        }, 1000);
    }
     if (user.email === 'aj08@gmail.com') {
            // Redirect to AI selection page for premium user
            window.location.href = 'ai-selection.html';}
    //if (user.userType === 'admin' || user.email === 'aj08@gmail.com') {
            // Open premium chatbot in new tab
           // window.open('chatbot.html', '_blank');
        //}

    updateUserUI();
    return true;
}
// Update user UI after login
function updateUserUI() {







     let userGreeting = `Hi, ${currentUser.name.split(' ')[0]}`;

        // Add premium badge if applicable
        if (currentUser.email === 'aj08@gmail.com' || currentUser.userType === 'admin') {
            userGreeting += ' <span class="premium-badge"><i class="fas fa-crown"></i> Premium</span>';
        }

        document.querySelector('.auth-buttons').innerHTML = `
            <div class="user-avatar">
                <img src="${currentUser.avatar || 'images/avatar-default.jpg'}" alt="${currentUser.name}">
            </div>
            <span class="user-greeting">${userGreeting}</span>
            <button class="btn btn-outline" id="logout-btn">Logout</button>
        `;

        document.getElementById('logout-btn').addEventListener('click', logout);
}

// Handle Registration
function handleRegistration(formData) {
    // Check if email already exists
    if (usersData.some(u => u.email === formData.email)) {
        showToast('Email already registered', 'error');
        return false;
    }

    // Validate password
    if (formData.password.length < 6) {
        showToast('Password must be at least 6 characters', 'error');
        return false;
    }

    // Create new user
    const newUser = {
        id: 'u' + (usersData.length + 1),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        userType: formData.userType,
        registrationDate: new Date().toISOString().split('T')[0],
        avatar: 'images/avatar-default.jpg'
    };

    usersData.push(newUser);
    currentUser = newUser;
    showToast(`Registration successful! Welcome, ${newUser.name}`);

    // Update UI for logged in user
    updateUserUI();
    return true;
}

// Render Reviews
function renderReviews() {
    const reviewsGrid = document.querySelector('.reviews-grid');
    reviewsGrid.innerHTML = '';

    // Get 6 random reviews for the homepage
    const shuffledReviews = [...reviewsData].sort(() => 0.5 - Math.random());
    const displayedReviews = shuffledReviews.slice(0, 6);

    displayedReviews.forEach(review => {
        const field = fieldsData.find(f => f.id === review.fieldId);
        const user = usersData.find(u => u.id === review.userId);
        if (!field || !user) return;

        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        reviewCard.innerHTML = `
            <div class="review-header">
                <div class="review-avatar">
                    <img src="${user.avatar}" alt="${user.name}">
                </div>
                <div>
                    <h4>${user.name}</h4>
                    <div class="review-rating">${renderStars(review.rating)}</div>
                    <small>${field.name}</small>
                </div>
            </div>
            <div class="review-content">
                <p>${review.comment}</p>
                <span class="review-date">${formatDate(review.date)}</span>
            </div>
        `;
        reviewsGrid.appendChild(reviewCard);
    });
}

// Format Date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Show Toast Notification
function showToast(message, type = 'success') {
    toastMessage.textContent = message;
    toast.className = 'toast';
    toast.classList.add(type);
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Close Modal
function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Open Booking Modal
function openBookingModal() {
    if (!currentUser) {
        showToast('Please login to make a booking');
        loginModal.style.display = 'block';
        return;
    }
    if (!selectedField || !selectedSlot) return;

    document.getElementById('booking-field-name').textContent = selectedField.name;
    document.getElementById('booking-date-display').textContent = document.getElementById('booking-date').value;
    document.getElementById('booking-time').textContent = selectedSlot.time;
    document.getElementById('booking-total').textContent = `Rs. ${selectedSlot.price}`;

    // Reset form
    bookingForm.reset();
    document.getElementById('player-count').value = selectedField.size === '5-a-side' ? 5 :
                                                  selectedField.size === '7-a-side' ? 7 : 11;

    // Close field modal and open booking modal
    closeModal(fieldModal);
    bookingModal.style.display = 'block';
}

// Setup Event Listeners
function setupEventListeners() {
    // Modal close buttons
    modalCloses.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            const modal = closeBtn.closest('.modal');
            closeModal(modal);
        });
    });

    // Click outside modal to close
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });

    // Login/Register buttons
    loginBtn?.addEventListener('click', () => {
        loginModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    registerBtn?.addEventListener('click', () => {
        registerModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    // Switch between login/register
    showRegister?.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(loginModal);
        registerModal.style.display = 'block';
    });

    showLogin?.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(registerModal);
        loginModal.style.display = 'block';
    });

    // Leave review button
    leaveReviewBtn?.addEventListener('click', () => {
        if (!currentUser) {
            showToast('Please login to leave a review');
            loginModal.style.display = 'block';
            return;
        }

        // Populate fields dropdown
        const fieldSelect = document.getElementById('review-field');
        fieldSelect.innerHTML = '';
        fieldsData.forEach(field => {
            const option = document.createElement('option');
            option.value = field.id;
            option.textContent = field.name;
            fieldSelect.appendChild(option);
        });

        reviewModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    // Star rating in review form
    const stars = document.querySelectorAll('.rating-input i');
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.dataset.rating);
            document.getElementById('review-rating').value = rating;

            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.remove('far');
                    s.classList.add('fas');
                } else {
                    s.classList.remove('fas');
                    s.classList.add('far');
                }
            });
        });
    });

    // Proceed to booking button
    proceedToBookingBtn?.addEventListener('click', openBookingModal);

    // Form submissions
    bookingForm?.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!currentUser) {
        showToast('Please login to make a booking');
        loginModal.style.display = 'block';
        return;
      }


        // Create new booking
       const newBooking = {
           id: 'b' + (bookingsData.length + 1),
           fieldId: selectedField.id,
           userId: currentUser.id,
           date: document.getElementById('booking-date').value,
           time: selectedSlot.time,
           duration: 1,
           players: document.getElementById('player-count').value,
           teamName: document.getElementById('team-name').value || '',
           totalPrice: selectedSlot.price,
           paymentMethod: document.querySelector('input[name="payment"]:checked').value,
           status: 'confirmed',
           createdAt: new Date().toISOString()
         };

         bookingsData.push(newBooking);
         saveBookingsData(); // Save to localStorage
         showToast('Booking confirmed! A confirmation has been sent to your email.');
         closeModal(bookingModal);
       });
    loginForm?.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const rememberMe = document.querySelector('#login-form input[type="checkbox"]').checked;

        if (!email || !password) {
            showToast('Please enter both email and password', 'error');
            return;
        }

        if (handleLogin(email, password)) {
            // Remember user if checkbox is checked
            if (rememberMe) {
                localStorage.setItem('rememberedUser', JSON.stringify({ email, password }));
            }

            closeModal(loginModal);
        }
    });

    registerForm?.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('register-name').value,
            email: document.getElementById('register-email').value,
            phone: document.getElementById('register-phone').value,
            password: document.getElementById('register-password').value,
            userType: document.getElementById('user-type').value
        };

        const confirmPassword = document.getElementById('register-confirm').value;

        if (formData.password !== confirmPassword) {
            showToast('Passwords do not match', 'error');
            return;
        }

        if (!formData.name || !formData.email || !formData.phone || !formData.password) {
            showToast('Please fill all fields', 'error');
            return;
        }

        if (handleRegistration(formData)) {
            closeModal(registerModal);
        }
    });

    reviewForm?.addEventListener('submit', (e) => {
        e.preventDefault();

        const fieldId = document.getElementById('review-field').value;
        const rating = document.getElementById('review-rating').value;
        const comment = document.getElementById('review-comment').value;

        if (!rating || !comment) {
            showToast('Please provide a rating and comment', 'error');
            return;
        }

        // Create new review
        const newReview = {
            id: 'r' + (reviewsData.length + 1),
            fieldId,
            userId: currentUser.id,
            rating: parseInt(rating),
            comment,
            date: new Date().toISOString().split('T')[0]
        };

        reviewsData.push(newReview);
        renderReviews();

        // Update field rating
        const field = fieldsData.find(f => f.id === fieldId);
        if (field) {
            field.reviews++;
            // Calculate new average rating
            const fieldReviews = reviewsData.filter(r => r.fieldId === fieldId);
            const totalRating = fieldReviews.reduce((sum, review) => sum + review.rating, 0);
            field.rating = (totalRating / fieldReviews.length).toFixed(1);
        }

        showToast('Thank you for your review!');
        closeModal(reviewModal);
    });

    // Hamburger menu for mobile
    hamburger?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Filter fields
    document.querySelectorAll('#location, #surface, #size').forEach(filter => {
        filter?.addEventListener('change', () => {
            const location = document.getElementById('location').value;
            const surface = document.getElementById('surface').value;
            const size = document.getElementById('size').value;

            // In a real app, this would filter the fieldsData array
            // For now, we'll just show all fields
            renderFields();
        });
    });

    // Admin button
    adminBtn?.addEventListener('click', () => {
        if (!currentUser || currentUser.userType !== 'admin') {
            showToast('Admin access only', 'error');
            return;
        }
        adminModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        renderAdminFields();
        renderAdminBookings();
        renderAdminUsers();
    });

    // Admin tabs
    document.querySelectorAll('.tab-btn').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.dataset.tab;
            document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Add field button
    addFieldBtn?.addEventListener('click', () => {
        addFieldModal.style.display = 'block';
    });

    // Add field form
    addFieldForm?.addEventListener('submit', (e) => {
        e.preventDefault();

        const amenities = document.getElementById('field-amenities').value
            .split(',')
            .map(item => item.trim())
            .filter(item => item);

        const images = document.getElementById('field-images').value
            .split('\n')
            .map(url => url.trim())
            .filter(url => url);

        const newField = {
            id: 'f' + (fieldsData.length + 1),
            name: document.getElementById('field-name').value,
            location: document.getElementById('field-location').value,
            description: document.getElementById('field-description').value,
            size: document.getElementById('field-size').value,
            surface: document.getElementById('field-surface').value,
            price: parseInt(document.getElementById('field-price').value),
            capacity: parseInt(document.getElementById('field-capacity').value),
            amenities: amenities,
            images: images.length ? images : ['images/field-default.jpg'],
            rating: 0,
            reviews: 0
        };

        fieldsData.push(newField);
        renderFields();
        renderAdminFields();
        closeModal(addFieldModal);
        addFieldForm.reset();
        showToast('Field added successfully!');
    });

    // Booking filter
    bookingFilter?.addEventListener('change', () => {
        renderAdminBookings();
    });

    // User search
    userSearch?.addEventListener('input', () => {
        renderAdminUsers();
    });

    // AI Assistant
    aiToggle?.addEventListener('click', () => {
        aiAssistant.classList.toggle('open');
    });

    aiCloseBtn?.addEventListener('click', () => {
        aiAssistant.classList.remove('open');
    });

    aiSendBtn?.addEventListener('click', sendAIMessage);

    aiChatInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendAIMessage();
        }
    });
}

// Logout function
function logout() {
    currentUser = null;
    localStorage.removeItem('rememberedUser');
    showToast('Logged out successfully');

    // Reset UI
    document.querySelector('.auth-buttons').innerHTML = `
        <button id="login-btn" class="btn btn-outline">Login</button>
        <button id="register-btn" class="btn btn-primary">Register</button>
    `;

    // Hide admin button
    adminBtn.style.display = 'none';

    // Re-add event listeners to new buttons
    document.getElementById('login-btn').addEventListener('click', () => {
        loginModal.style.display = 'block';
        document.body.style.overflow = 'hidden';

    adminBtn.style.display = 'none';
});

    document.getElementById('register-btn').addEventListener('click', () => {
        registerModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
}

// Render Admin Fields
function renderAdminFields() {
    const fieldsList = document.querySelector('#manage-fields .admin-fields-list');
    fieldsList.innerHTML = '';

    fieldsData.forEach(field => {
        const fieldItem = document.createElement('div');
        fieldItem.className = 'admin-item';
        fieldItem.innerHTML = `
            <div class="admin-item-info">
                <h4>${field.name}</h4>
                <p>${field.location} • ${field.size} • Rs. ${field.price}/hr</p>
                <p>Rating: ${field.rating} (${field.reviews} reviews)</p>
            </div>
            <div class="admin-actions">
                <button class="btn btn-outline edit-field" data-id="${field.id}">Edit</button>
                <button class="btn btn-danger delete-field" data-id="${field.id}">Delete</button>
            </div>
        `;

        fieldsList.appendChild(fieldItem);
    });

    // Add event listeners for edit/delete
    document.querySelectorAll('.edit-field').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const fieldId = e.target.dataset.id;
            editField(fieldId);
        });
    });

    document.querySelectorAll('.delete-field').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const fieldId = e.target.dataset.id;
            if (confirm('Are you sure you want to delete this field?')) {
                deleteField(fieldId);
            }
        });
    });
}

// Render Admin Bookings
function renderAdminBookings() {
    const bookingsList = document.querySelector('#manage-bookings .admin-bookings-list');
    bookingsList.innerHTML = '';

    const filter = bookingFilter.value;
    const today = new Date().toISOString().split('T')[0];

    const filteredBookings = bookingsData.filter(booking => {
        if (filter === 'today') return booking.date === today;
        if (filter === 'upcoming') return booking.date >= today;
        if (filter === 'past') return booking.date < today;
        return true; // all
    });

    if (filteredBookings.length === 0) {
        bookingsList.innerHTML = '<p class="no-results">No bookings found</p>';
        return;
    }

    filteredBookings.forEach(booking => {
        const field = fieldsData.find(f => f.id === booking.fieldId);
        const user = usersData.find(u => u.id === booking.userId);

        if (!field || !user) return;

        const bookingItem = document.createElement('div');
        bookingItem.className = 'admin-item';
        bookingItem.innerHTML = `
            <div class="admin-item-info">
                <h4>${field.name}</h4>
                <p>${user.name} • ${formatDate(booking.date)} at ${booking.time} (${booking.duration} hr)</p>
                <p>Rs. ${booking.totalPrice} • ${booking.paymentMethod} •
                <span class="status-${booking.status}">${booking.status}</span></p>
            </div>
            <div class="admin-actions">
                <button class="btn btn-outline edit-booking" data-id="${booking.id}">Edit</button>
                <button class="btn btn-danger cancel-booking" data-id="${booking.id}">Cancel</button>
            </div>
        `;

        bookingsList.appendChild(bookingItem);
    });

    // Add event listeners for edit/cancel
    document.querySelectorAll('.edit-booking').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const bookingId = e.target.dataset.id;
            editBooking(bookingId);
        });
    });

    document.querySelectorAll('.cancel-booking').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const bookingId = e.target.dataset.id;
            if (confirm('Are you sure you want to cancel this booking?')) {
                cancelBooking(bookingId);
            }
        });
    });
}

// Render Admin Users
function renderAdminUsers() {
    const usersList = document.querySelector('#manage-users .admin-users-list');
    usersList.innerHTML = '';

    const searchTerm = userSearch.value.toLowerCase();

    const filteredUsers = usersData.filter(user => {
        return (
            user.name.toLowerCase().includes(searchTerm) ||
            user.email.toLowerCase().includes(searchTerm) ||
            user.phone.includes(searchTerm)
        );
    });

    if (filteredUsers.length === 0) {
        usersList.innerHTML = '<p class="no-results">No users found</p>';
        return;
    }

    filteredUsers.forEach(user => {
        const userItem = document.createElement('div');
        userItem.className = 'admin-item';
        userItem.innerHTML = `
            <div class="admin-item-info">
                <div style="display: flex; align-items: center; gap: 15px;">
                    <img src="${user.avatar}" alt="${user.name}" style="width: 50px; height: 50px; border-radius: 50%;">
                    <div>
                        <h4>${user.name}</h4>
                        <p>${user.email} • ${user.phone}</p>
                    </div>
                </div>
                <p>${user.userType} • Joined: ${formatDate(user.registrationDate)}</p>
            </div>
            <div class="admin-actions">
                <button class="btn btn-outline edit-user" data-id="${user.id}">Edit</button>
                <button class="btn btn-danger delete-user" data-id="${user.id}">Delete</button>
            </div>
        `;

        usersList.appendChild(userItem);
    });

    // Add event listeners for edit/delete
    document.querySelectorAll('.edit-user').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const userId = e.target.dataset.id;
            editUser(userId);
        });
    });

    document.querySelectorAll('.delete-user').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const userId = e.target.dataset.id;
            if (userId === 'admin') {
                showToast('Cannot delete admin user', 'error');
                return;
            }
            if (confirm('Are you sure you want to delete this user?')) {
                deleteUser(userId);
            }
        });
    });
}

// Field CRUD operations
function editField(fieldId) {
    const field = fieldsData.find(f => f.id === fieldId);
    if (!field) return;

    // Populate the add field form with existing data
    document.getElementById('field-name').value = field.name;
    document.getElementById('field-location').value = field.location;
    document.getElementById('field-description').value = field.description;
    document.getElementById('field-size').value = field.size;
    document.getElementById('field-surface').value = field.surface;
    document.getElementById('field-price').value = field.price;
    document.getElementById('field-capacity').value = field.capacity;
    document.getElementById('field-amenities').value = field.amenities.join(', ');
    document.getElementById('field-images').value = field.images.join('\n');

    // Change the form to edit mode
    addFieldForm.querySelector('button').textContent = 'Update Field';
    addFieldForm.removeEventListener('submit', addFieldForm.onsubmit);
    addFieldForm.onsubmit = function(e) {
        e.preventDefault();

        // Update the field data
        field.name = document.getElementById('field-name').value;
        field.location = document.getElementById('field-location').value;
        field.description = document.getElementById('field-description').value;
        field.size = document.getElementById('field-size').value;
        field.surface = document.getElementById('field-surface').value;
        field.price = parseInt(document.getElementById('field-price').value);
        field.capacity = parseInt(document.getElementById('field-capacity').value);
        field.amenities = document.getElementById('field-amenities').value
            .split(',')
            .map(item => item.trim())
            .filter(item => item);
        field.images = document.getElementById('field-images').value
            .split('\n')
            .map(url => url.trim())
            .filter(url => url);

        renderFields();
        renderAdminFields();
        closeModal(addFieldModal);
        addFieldForm.reset();
        showToast('Field updated successfully!');
    };

    addFieldModal.style.display = 'block';
}

function deleteField(fieldId) {
    const index = fieldsData.findIndex(f => f.id === fieldId);
    if (index !== -1) {
        fieldsData.splice(index, 1);
        renderFields();
        renderAdminFields();
        showToast('Field deleted successfully!');
    }
}

// Booking CRUD operations
function editBooking(bookingId) {
    const booking = bookingsData.find(b => b.id === bookingId);
    if (!booking) return;

    selectedBooking = booking;
    const field = fieldsData.find(f => f.id === booking.fieldId);
    const user = usersData.find(u => u.id === booking.userId);

    // Create edit booking modal content
    const modalContent = `
        <div class="modal-header">
            <h2>Edit Booking</h2>
        </div>
        <div class="modal-body">
            <div class="booking-summary">
                <h3>${field.name}</h3>
                <p><strong>User:</strong> ${user.name}</p>
                <p><strong>Date:</strong> ${booking.date}</p>
                <p><strong>Time:</strong> ${booking.time}</p>
                <p><strong>Duration:</strong> ${booking.duration} hour(s)</p>
                <p><strong>Total:</strong> Rs. ${booking.totalPrice}</p>
            </div>

            <form id="edit-booking-form">
                <div class="form-group">
                    <label for="edit-player-count">Number of Players</label>
                    <input type="number" id="edit-player-count" min="1" max="22" value="${booking.players}">
                </div>

                <div class="form-group">
                    <label for="edit-team-name">Team Name</label>
                    <input type="text" id="edit-team-name" value="${booking.teamName || ''}">
                </div>

                <div class="booking-status">
                    <h3>Booking Status</h3>
                    <div>
                        <input type="radio" id="status-confirmed" name="status" value="confirmed" ${booking.status === 'confirmed' ? 'checked' : ''}>
                        <label for="status-confirmed">Confirmed</label>

                        <input type="radio" id="status-pending" name="status" value="pending" ${booking.status === 'pending' ? 'checked' : ''}>
                        <label for="status-pending">Pending</label>

                        <input type="radio" id="status-cancelled" name="status" value="cancelled" ${booking.status === 'cancelled' ? 'checked' : ''}>
                        <label for="status-cancelled">Cancelled</label>

                        <input type="radio" id="status-completed" name="status" value="completed" ${booking.status === 'completed' ? 'checked' : ''}>
                        <label for="status-completed">Completed</label>
                    </div>
                </div>

                <button type="submit" class="btn btn-primary">Update Booking</button>
            </form>
        </div>
    `;

    // Create or update edit booking modal
    let editModal = document.getElementById('edit-booking-modal');
    if (!editModal) {
        editModal = document.createElement('div');
        editModal.id = 'edit-booking-modal';
        editModal.className = 'modal';
        document.body.appendChild(editModal);
    }

    editModal.innerHTML = modalContent;
    editModal.querySelector('.modal-header').insertAdjacentHTML('beforeend', '<span class="close">&times;</span>');

    // Add form submission handler
    document.getElementById('edit-booking-form')?.addEventListener('submit', (e) => {
        e.preventDefault();

        booking.players = document.getElementById('edit-player-count').value;
        booking.teamName = document.getElementById('edit-team-name').value;
        booking.status = document.querySelector('input[name="status"]:checked').value;

        showToast('Booking updated successfully!');
        renderAdminBookings();
        closeModal(editModal);
    });

    // Add close button handler
    editModal.querySelector('.close')?.addEventListener('click', () => {
        closeModal(editModal);
    });

    // Show modal
    editModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function cancelBooking(bookingId) {
    const booking = bookingsData.find(b => b.id === bookingId);
    if (booking) {
        booking.status = 'cancelled';
        renderAdminBookings();
        showToast('Booking cancelled successfully!');
    }
}

// User CRUD operations
function editUser(userId) {
    const user = usersData.find(u => u.id === userId);
    if (!user) return;

    // Create edit user modal content
    const modalContent = `
        <div class="modal-header">
            <h2>Edit User</h2>
        </div>
        <div class="modal-body">
            <form id="edit-user-form">
                <div class="form-group">
                    <label for="edit-user-name">Full Name</label>
                    <input type="text" id="edit-user-name" value="${user.name}" required>
                </div>
                <div class="form-group">
                    <label for="edit-user-email">Email</label>
                    <input type="email" id="edit-user-email" value="${user.email}" required>
                </div>
                <div class="form-group">
                    <label for="edit-user-phone">Phone Number</label>
                    <input type="tel" id="edit-user-phone" value="${user.phone}" required>
                </div>
                <div class="form-group">
                    <label for="edit-user-type">User Type</label>
                    <select id="edit-user-type" required>
                        <option value="player" ${user.userType === 'player' ? 'selected' : ''}>Player</option>
                        <option value="team-manager" ${user.userType === 'team-manager' ? 'selected' : ''}>Team Manager</option>
                        <option value="field-owner" ${user.userType === 'field-owner' ? 'selected' : ''}>Field Owner</option>
                        <option value="admin" ${user.userType === 'admin' ? 'selected' : ''}>Admin</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="edit-user-password">New Password (leave blank to keep current)</label>
                    <input type="password" id="edit-user-password">
                </div>
                <button type="submit" class="btn btn-primary">Update User</button>
            </form>
        </div>
    `;

    // Create or update edit user modal
    let editModal = document.getElementById('edit-user-modal');
    if (!editModal) {
        editModal = document.createElement('div');
        editModal.id = 'edit-user-modal';
        editModal.className = 'modal';
        document.body.appendChild(editModal);
    }

    editModal.innerHTML = modalContent;
    editModal.querySelector('.modal-header').insertAdjacentHTML('beforeend', '<span class="close">&times;</span>');

    // Add form submission handler
    document.getElementById('edit-user-form')?.addEventListener('submit', (e) => {
        e.preventDefault();

        user.name = document.getElementById('edit-user-name').value;
        user.email = document.getElementById('edit-user-email').value;
        user.phone = document.getElementById('edit-user-phone').value;
        user.userType = document.getElementById('edit-user-type').value;

        const newPassword = document.getElementById('edit-user-password').value;
        if (newPassword) {
            user.password = newPassword;
        }

        showToast('User updated successfully!');
        renderAdminUsers();

        // If current user updated themselves, update UI
        if (currentUser && currentUser.id === user.id) {
            updateUserUI();
        }

        closeModal(editModal);
    });

    // Add close button handler
    editModal.querySelector('.close')?.addEventListener('click', () => {
        closeModal(editModal);
    });

    // Show modal
    editModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function deleteUser(userId) {
    const index = usersData.findIndex(u => u.id === userId);
    if (index !== -1) {
        usersData.splice(index, 1);
        renderAdminUsers();
        showToast('User deleted successfully!');

        // If current user deleted themselves, log them out
        if (currentUser && currentUser.id === userId) {
            logout();
        }
    }
}

// AI Chatbot Functions
function sendAIMessage() {
    const message = aiChatInput.value.trim();
    if (!message) return;

    // Add user message to chat
    addAIMessage(message, 'user');
    aiChatInput.value = '';

    // Simulate AI thinking
    setTimeout(() => {
        const response = generateAIResponse(message);
        addAIMessage(response, 'bot');
    }, 500);
}

function addAIMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `ai-message ${sender}`;
    messageDiv.innerHTML = `<p>${text}</p>`;
    aiChatMessages.appendChild(messageDiv);
    aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
}

function generateAIResponse(message, previousContext = []) {
    const lowerMsg = message.toLowerCase();
    const context = [...previousContext, message.toLowerCase()];
    const lastFiveMessages = context.slice(-5).join(" ");

    // Check for continuation of existing topics
    if (lastFiveMessages.includes("football") || context.some(m => m.includes("soccer"))) {
        if (lowerMsg.includes("team") || lowerMsg.includes("club")) {
            return "Football teams have such passionate followings! Are we talking about a specific club's performance, history, or maybe your local team?";
        }
        if (lowerMsg.includes("player") || lowerMsg.includes("messi") || lowerMsg.includes("ronaldo")) {
            return "The legends of the game! Who do you think is the GOAT? Or maybe you have a favorite underrated player?";
        }
        if (lowerMsg.includes("match") || lowerMsg.includes("game")) {
            return "Nothing beats the excitement of a good match! Are you watching any particular league or tournament right now?";
        }
        return aiResponses.topics.sports.football.general;
    }

    if (lastFiveMessages.includes("movie") || lastFiveMessages.includes("film")) {
        if (lowerMsg.includes("recommend") || lowerMsg.includes("suggest")) {
            return "Ooh, recommendations! What genre are you in the mood for? Action, comedy, thought-provoking dramas?";
        }
        if (lowerMsg.includes("watch") || lowerMsg.includes("seen")) {
            return "Have you seen anything great lately? I love hearing about what movies resonate with people!";
        }
        return aiResponses.topics.entertainment.movies;
    }

   if (lastFiveMessages.includes("music") || context.some(m => m.includes("song") || m.includes("band"))) {
       if (lowerMsg.includes("listen") || lowerMsg.includes("hear")) {
           return "Music is my favorite way to upgrade any moment! What's playing in your world these days?";
       }
       if (lowerMsg.includes("recommend") || lowerMsg.includes("suggest")) {
           return "I'd be happy to suggest some tunes! Are you looking for something upbeat to energize you, or mellower to relax?";
       }
       return aiResponses.topics.entertainment.music;
   }

    // Greetings
    if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey') ||
        lowerMsg.includes('greet') || lowerMsg.includes('howdy')) {
        return aiResponses.greetings[Math.floor(Math.random() * aiResponses.greetings.length)];
    }

    // Farewells
    if (lowerMsg.includes('bye') || lowerMsg.includes('goodbye') || lowerMsg.includes('see you') ||
        lowerMsg.includes('later') || lowerMsg.includes('gotta go')) {
        return aiResponses.farewells[Math.floor(Math.random() * aiResponses.farewells.length)];
    }

    // Personal Connection
    if (lowerMsg.includes('how are you') || lowerMsg.includes("how's it going") ||
        lowerMsg.includes("how do you feel")) {
        return aiResponses.personal.howAreYou[Math.floor(Math.random() * aiResponses.personal.howAreYou.length)];
    }

    if (lowerMsg.includes('compliment') || lowerMsg.includes('nice') || lowerMsg.includes('awesome') ||
        lowerMsg.includes('great') && context.some(m => m.includes("you"))) {
        return aiResponses.personal.compliments[Math.floor(Math.random() * aiResponses.personal.compliments.length)];
    }

    if (lowerMsg.includes('encourage') || lowerMsg.includes('motivate') || lowerMsg.includes('confidence') ||
        (lowerMsg.includes('feel') && (lowerMsg.includes('down') || lowerMsg.includes('bad')))) {
        return aiResponses.personal.encouragement[Math.floor(Math.random() * aiResponses.personal.encouragement.length)];
    }

    // Help
    if (lowerMsg.includes('help') || lowerMsg.includes('support') || lowerMsg.includes('assistance') ||
        lowerMsg.includes('what can you do')) {
        return aiResponses.help;
    }

    // Sports
    if (lowerMsg.includes('sport') || lowerMsg.includes('football') || lowerMsg.includes('soccer') ||
        lowerMsg.includes('basketball') || lowerMsg.includes('tennis') || lowerMsg.includes('game') ||
        lowerMsg.includes('play') || lowerMsg.includes('exercise') || lowerMsg.includes('fitness')) {

        if (lowerMsg.includes('football') || lowerMsg.includes('soccer')) {
            if (lowerMsg.includes('skill') || lowerMsg.includes('improve')) {
                return aiResponses.topics.sports.football.skills;
            }
            if (lowerMsg.includes('league') || lowerMsg.includes('premier') || lowerMsg.includes('la liga')) {
                return aiResponses.topics.sports.football.leagues;
            }
            if (lowerMsg.includes('history') || lowerMsg.includes('origin')) {
                return aiResponses.topics.sports.football.history;
            }
            return aiResponses.topics.sports.football.general;
        }

        if (lowerMsg.includes('basketball') || lowerMsg.includes('nba')) {
            return aiResponses.topics.sports.basketball;
        }

        if (lowerMsg.includes('tennis') || lowerMsg.includes('wimbledon')) {
            return aiResponses.topics.sports.tennis;
        }

        return aiResponses.topics.sports.general;
    }

    // Entertainment
    if (lowerMsg.includes('movie') || lowerMsg.includes('film') || lowerMsg.includes('cinema') ||
        lowerMsg.includes('music') || lowerMsg.includes('song') || lowerMsg.includes('band') ||
        lowerMsg.includes('book') || lowerMsg.includes('read') || lowerMsg.includes('novel') ||
        lowerMsg.includes('game') || lowerMsg.includes('playstation') || lowerMsg.includes('xbox')) {

        if (lowerMsg.includes('movie') || lowerMsg.includes('film')) {
            return aiResponses.topics.entertainment.movies;
        }

        if (lowerMsg.includes('music') || lowerMsg.includes('song')) {
            return aiResponses.topics.entertainment.music;
        }

        if (lowerMsg.includes('books') || lowerMsg.includes('read')) {
            return aiResponses.topics.entertainment.books;
        }

        if (lowerMsg.includes('game') && !lowerMsg.includes('sport')) {
            return aiResponses.topics.entertainment.games;
        }

        return "Entertainment makes life so much richer! What's your preferred way to unwind and enjoy?";
    }

    // Technology
    if (lowerMsg.includes('tech') || lowerMsg.includes('computer') || lowerMsg.includes('phone') ||
        lowerMsg.includes('ai') || lowerMsg.includes('artificial') || lowerMsg.includes('gadget') ||
        lowerMsg.includes('future') || lowerMsg.includes('innovation')) {

        if (lowerMsg.includes('ai') || lowerMsg.includes('artificial')) {
            return aiResponses.topics.technology.ai;
        }

        if (lowerMsg.includes('gadget') || lowerMsg.includes('phone') || lowerMsg.includes('device')) {
            return aiResponses.topics.technology.gadgets;
        }

        if (lowerMsg.includes('future') || lowerMsg.includes('innovation')) {
            return aiResponses.topics.technology.future;
        }

        return "Technology is changing our world so fast! What aspect of tech interests you most?";
    }

    // Lifestyle
    if (lowerMsg.includes('health') || lowerMsg.includes('diet') || lowerMsg.includes('exercise') ||
        lowerMsg.includes('travel') || lowerMsg.includes('vacation') || lowerMsg.includes('trip') ||
        lowerMsg.includes('food') || lowerMsg.includes('cook') || lowerMsg.includes('recipe') ||
        lowerMsg.includes('hobby') || lowerMsg.includes('interest') || lowerMsg.includes('passion')) {

        if (lowerMsg.includes('health') || lowerMsg.includes('diet') || lowerMsg.includes('exercise')) {
            return aiResponses.topics.lifestyle.health;
        }

        if (lowerMsg.includes('travel') || lowerMsg.includes('vacation')) {
            return aiResponses.topics.lifestyle.travel;
        }

        if (lowerMsg.includes('food') || lowerMsg.includes('cook')) {
            return aiResponses.topics.lifestyle.food;
        }

        if (lowerMsg.includes('hobby') || lowerMsg.includes('interest')) {
            return aiResponses.topics.lifestyle.hobbies;
        }

        return "Lifestyle choices make each person's journey unique! What aspects of your lifestyle bring you joy?";
    }

    // Current Events
    if (lowerMsg.includes('news') || lowerMsg.includes('current') || lowerMsg.includes('event') ||
        lowerMsg.includes('world') || lowerMsg.includes('happen') || lowerMsg.includes('science') ||
        lowerMsg.includes('culture') || lowerMsg.includes('trend') || lowerMsg.includes('viral')) {

        if (lowerMsg.includes('science') || lowerMsg.includes('discover')) {
            return aiResponses.topics.currentEvents.science;
        }

        if (lowerMsg.includes('culture') || lowerMsg.includes('trend')) {
            return aiResponses.topics.currentEvents.culture;
        }

        return aiResponses.topics.currentEvents.general;
    }

    // Deep Conversations
    if (lowerMsg.includes('meaning') || lowerMsg.includes('purpose') || lowerMsg.includes('philosophy') ||
        lowerMsg.includes('future') || lowerMsg.includes('exist') || lowerMsg.includes('feel') ||
        lowerMsg.includes('emotion') || lowerMsg.includes('think') || lowerMsg.includes('believe')) {

        if (lowerMsg.includes('meaning') || lowerMsg.includes('purpose')) {
            return aiResponses.deepTalk.philosophy[Math.floor(Math.random() * aiResponses.deepTalk.philosophy.length)];
        }

        if (lowerMsg.includes('future') || lowerMsg.includes('tomorrow')) {
            return aiResponses.deepTalk.future[Math.floor(Math.random() * aiResponses.deepTalk.future.length)];
        }

        if (lowerMsg.includes('feel') || lowerMsg.includes('emotion')) {
            return aiResponses.deepTalk.emotions[Math.floor(Math.random() * aiResponses.deepTalk.emotions.length)];
        }

        return "Deep conversations are my favorite! What big questions are on your mind?";
    }

    // Humor
    if (lowerMsg.includes('joke') || lowerMsg.includes('funny') || lowerMsg.includes('laugh') ||
        lowerMsg.includes('humor') || lowerMsg.includes('pun') || (lowerMsg.includes('make') && lowerMsg.includes('smile'))) {
        return aiResponses.humor[Math.floor(Math.random() * aiResponses.humor.length)];
    }








        if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
            return aiResponses.greetings[Math.floor(Math.random() * aiResponses.greetings.length)];
        }
        if (lowerMsg.includes('help') || lowerMsg.includes('what can you do')) {
            return aiResponses.help;
        }
        if (lowerMsg.includes('booking') || lowerMsg.includes('reserve') || lowerMsg.includes('schedule')) {
            return aiResponses.booking;
        }
        if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('how much')) {
            return aiResponses.pricing;
        }
        if (lowerMsg.includes('where') || lowerMsg.includes('location') || lowerMsg.includes('area')) {
            return aiResponses.locations;
        }
        if (lowerMsg.includes('weather')) {
            return aiResponses.weather;
        }
        if (lowerMsg.includes('pay') || lowerMsg.includes('payment') || lowerMsg.includes('method')) {
            return aiResponses.payment;
        }



    // Default fallback with context awareness
    const defaultResponses = [
        "I love how our conversation is flowing! To keep it going, could you tell me more about what's on your mind?",
        "You've got me curious now! Could you expand on that a bit?",
        "There are so many interesting directions we could take this conversation. What would you like to explore?",
        "I'm all ears (metaphorically speaking)! What would you like to chat about next?",
        "Our conversation is like an open book - what chapter should we turn to next?"
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}







// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);