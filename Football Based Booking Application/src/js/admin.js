// DOM Elements
const logoutBtn = document.getElementById('logout-btn');
const addBookingBtn = document.getElementById('add-booking-btn');
const bookingsTableBody = document.getElementById('bookings-table-body');
const bookingStatusFilter = document.getElementById('booking-status');
const bookingDateRangeFilter = document.getElementById('booking-date-range');
const customDateRange = document.getElementById('custom-date-range');
const startDateInput = document.getElementById('start-date');
const endDateInput = document.getElementById('end-date');
const bookingSearchInput = document.getElementById('booking-search');
const addBookingModal = document.getElementById('add-booking-modal');
const editBookingModal = document.getElementById('edit-booking-modal');
const confirmModal = document.getElementById('confirm-modal');
const addBookingForm = document.getElementById('add-booking-form');
const editBookingForm = document.getElementById('edit-booking-form');
const adminFieldSelect = document.getElementById('admin-field-select');
const adminUserSelect = document.getElementById('admin-user-select');
const editFieldSelect = document.getElementById('edit-field-select');
const editUserSelect = document.getElementById('edit-user-select');
const confirmCancelBtn = document.getElementById('confirm-cancel');
const confirmActionBtn = document.getElementById('confirm-action');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// State Management
let currentAdmin = null;
let bookingsData = [];
let fieldsData = [];
let usersData = [];
let actionToConfirm = null;
let bookingToDelete = null;

// Initialize Admin Dashboard
document.addEventListener('DOMContentLoaded', initAdmin);

async function initAdmin() {
    try {
        console.log('Verifying admin access...');
        await verifyAdminAccess();
        console.log('Admin verified:', currentAdmin);

        console.log('Initializing data...');
        await initializeData();

        console.log('Setting up UI...');
        setupUI();

        console.log('Rendering bookings...');
        renderBookings();

    } catch (error) {
        console.error('Admin dashboard initialization failed:', error);
        handleInitializationError(error);
    }
}

// Authentication Functions
async function verifyAdminAccess() {
    const userData = localStorage.getItem('currentUser');
    if (!userData) {
        redirectToLogin();
        throw new Error('No active user session');
    }

    currentAdmin = JSON.parse(userData);


if (currentAdmin.userType !== 'admin' && currentAdmin.email !== 'aj08@gmail.com') {
        showToast('Access denied: Admin privileges required', 'error');
        redirectToLogin();
        throw new Error('User is not an admin');
    }


    if (currentAdmin.email === 'aj08@gmail.com') {
            window.open('chatbot.html', '_blank');
        }

    return true;
}



function redirectToLogin() {
    window.location.href = 'index.html';
}

// Data Initialization Functions
async function initializeData() {
    // Load all data from localStorage
    bookingsData = JSON.parse(localStorage.getItem('bookingsData')) || [];
    fieldsData = JSON.parse(localStorage.getItem('fieldsData')) || [];
    usersData = JSON.parse(localStorage.getItem('usersData')) || [];

    // If no data exists, initialize with sample data
    if (fieldsData.length === 0) {
        fieldsData = [
            {
                id: 'f1',
                name: 'K21',
                location: 'Model town',
                description: 'Professional-grade football field with artificial turf and floodlights for night games.',
                size: '7-a-side',
                surface: 'Artificial Turf',
                price: 2000,
                capacity: 14,
                amenities: ['Floodlights', 'Changing Rooms', 'Parking', 'Cafeteria'],
                images: ['images/field1-1.jpg'],
                rating: 4.5,
                reviews: 28
            },
            {
                id: 'f2',
                name: 'MTFA',
                location: 'Model Town',
                description: 'Well-maintained natural grass field with proper markings and goal posts.',
                size: '7-a-side',
                surface: 'Natural Grass',
                price: 2000,
                capacity: 14,
                amenities: ['Parking', 'Showers', 'Seating Area'],
                images: ['images/field2-1.jpg'],
                rating: 4.2,
                reviews: 15
            }
        ];
        localStorage.setItem('fieldsData', JSON.stringify(fieldsData));
    }

    if (usersData.length === 0) {
        usersData = [
            {
                id: 'u1',
                name: 'Ahmed Khan',
                email: 'ahmed@example.com',
                phone: '03001234567',
                password: 'password123',
                userType: 'player'
            },
            {
                id: 'u2',
                name: 'Sara Ahmed',
                email: 'sara@example.com',
                phone: '03007654321',
                password: 'password123',
                userType: 'team-manager'
            },
            {
                id: 'admin',
                name: 'Admin User',
                email: 'admin@footypitch.com',
                phone: '03000000000',
                password: 'admin123',
                userType: 'admin'
            }
        ];
        localStorage.setItem('usersData', JSON.stringify(usersData));
    }

    if (bookingsData.length === 0) {
        bookingsData = createSampleBookings();
        localStorage.setItem('bookingsData', JSON.stringify(bookingsData));
    }

    populateFieldSelects();
    populateUserSelects();
}

function createSampleBookings() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];

    const dayAfter = new Date();
    dayAfter.setDate(dayAfter.getDate() + 2);
    const dayAfterStr = dayAfter.toISOString().split('T')[0];

    return [
        {
            id: 'b' + Math.random().toString(36).substr(2, 9),
            fieldId: 'f1',
            userId: 'u1',
            date: tomorrowStr,
            time: '16:00',
            duration: 1,
            players: 10,
            teamName: 'United FC',
            totalPrice: 2000,
            paymentMethod: 'credit-card',
            status: 'confirmed',
            createdAt: new Date().toISOString()
        },
        {
            id: 'b' + Math.random().toString(36).substr(2, 9),
            fieldId: 'f2',
            userId: 'u2',
            date: dayAfterStr,
            time: '19:00',
            duration: 2,
            players: 8,
            teamName: 'City Rangers',
            totalPrice: 4000,
            paymentMethod: 'paypal',
            status: 'pending',
            createdAt: new Date().toISOString()
        }
    ];
}

// Data Loading Functions
async function loadData() {
    try {
        bookingsData = JSON.parse(localStorage.getItem('bookingsData')) || [];
        fieldsData = JSON.parse(localStorage.getItem('fieldsData')) || [];
        usersData = JSON.parse(localStorage.getItem('usersData')) || [];

        populateFieldSelects();
        populateUserSelects();
    } catch (error) {
        console.error('Failed to load data:', error);
        throw error;
    }
}

function populateFieldSelects() {
    adminFieldSelect.innerHTML = '';
    editFieldSelect.innerHTML = '';

    fieldsData.forEach(field => {
        const option = document.createElement('option');
        option.value = field.id;
        option.textContent = field.name;
        adminFieldSelect.appendChild(option.cloneNode(true));
        editFieldSelect.appendChild(option.cloneNode(true));
    });
}

function populateUserSelects() {
    adminUserSelect.innerHTML = '';
    editUserSelect.innerHTML = '';

    usersData.forEach(user => {
        const option = document.createElement('option');
        option.value = user.id;
        option.textContent = user.name;
        adminUserSelect.appendChild(option.cloneNode(true));
        editUserSelect.appendChild(option.cloneNode(true));
    });
}

// UI Setup Functions
function setupUI() {
    setupEventListeners();
    setupDatePickers();
    setupSearchFunctionality();
    updateAdminInfo();
}

function setupDatePickers() {
    const dateInputs = document.querySelectorAll('input[type="date"]');
    const today = new Date().toISOString().split('T')[0];

    dateInputs.forEach(input => {
        input.min = today;
        if (input.id === 'admin-booking-date') {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            input.valueAsDate = tomorrow;
        }
    });
}

function setupSearchFunctionality() {
    bookingSearchInput.addEventListener('input', debounce(() => {
        renderBookings();
    }, 300));
}

function updateAdminInfo() {
    if (currentAdmin) {
        document.getElementById('admin-name').textContent = currentAdmin.name;
        document.getElementById('admin-email').textContent = currentAdmin.email;
    }
}

// Booking Management Functions
function renderBookings() {
    const statusFilter = bookingStatusFilter.value;
    const dateRange = bookingDateRangeFilter.value;
    const searchTerm = bookingSearchInput.value.toLowerCase();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const filteredBookings = filterBookings(statusFilter, dateRange, searchTerm, today);

    if (filteredBookings.length === 0) {
        displayNoResults();
        return;
    }

    displayBookings(filteredBookings);
    setupBookingActionButtons();
}

function filterBookings(statusFilter, dateRange, searchTerm, today) {
    return bookingsData.filter(booking => {
        // Status filter
        if (statusFilter !== 'all' && booking.status !== statusFilter) {
            return false;
        }

        // Date range filter
        if (!filterByDateRange(booking, dateRange, today)) {
            return false;
        }

        // Search term filter
        if (searchTerm && !matchesSearchTerm(booking, searchTerm)) {
            return false;
        }

        return true;
    });
}

function filterByDateRange(booking, dateRange, today) {
    const bookingDate = new Date(booking.date);

    if (dateRange === 'all') return true;
    if (dateRange === 'today') return isSameDay(bookingDate, today);
    if (dateRange === 'week') return isSameWeek(bookingDate, today);
    if (dateRange === 'month') return isSameMonth(bookingDate, today);
    if (dateRange === 'custom' && startDateInput.value && endDateInput.value) {
        const startDate = new Date(startDateInput.value);
        const endDate = new Date(endDateInput.value);
        return bookingDate >= startDate && bookingDate <= endDate;
    }

    return true;
}

function matchesSearchTerm(booking, searchTerm) {
    const field = fieldsData.find(f => f.id === booking.fieldId);
    const user = usersData.find(u => u.id === booking.userId);

    const searchContent = [
        booking.id,
        field?.name || '',
        user?.name || '',
        booking.date,
        booking.time,
        booking.status,
        booking.totalPrice.toString()
    ].join(' ').toLowerCase();

    return searchContent.includes(searchTerm);
}

function displayNoResults() {
    bookingsTableBody.innerHTML = `
        <tr>
            <td colspan="9" class="no-results">No bookings found matching your criteria</td>
        </tr>
    `;
}

function displayBookings(bookings) {
    bookingsTableBody.innerHTML = bookings.map(booking => {
        const field = fieldsData.find(f => f.id === booking.fieldId);
        const user = usersData.find(u => u.id === booking.userId);

        return `
            <tr>
                <td>${booking.id}</td>
                <td>${field?.name || 'Unknown Field'}</td>
                <td>${user?.name || 'Unknown User'}</td>
                <td>${formatDate(booking.date)} at ${booking.time}</td>
                <td>${booking.duration} hour(s)</td>
                <td>${booking.players}</td>
                <td><span class="status-badge ${booking.status}">${booking.status}</span></td>
                <td>Rs. ${booking.totalPrice}</td>
                <td class="actions">
                    <button class="btn-icon edit-btn" data-id="${booking.id}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-icon delete-btn" data-id="${booking.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

function setupBookingActionButtons() {
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const bookingId = e.currentTarget.dataset.id;
            openEditBookingModal(bookingId);
        });
    });

    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const bookingId = e.currentTarget.dataset.id;
            showConfirmModal(
                'Are you sure you want to delete this booking?',
                () => deleteBooking(bookingId)
            );
        });
    });
}

// Modal Functions
function openAddBookingModal() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    document.getElementById('admin-booking-date').valueAsDate = tomorrow;
    document.getElementById('admin-booking-time').value = '18:00';
    document.getElementById('admin-booking-duration').value = 1;
    document.getElementById('admin-player-count').value = 10;
    document.getElementById('admin-team-name').value = '';
    document.getElementById('admin-booking-status').value = 'confirmed';

    updateBookingPrice();
    adminFieldSelect.addEventListener('change', updateBookingPrice);

    showModal(addBookingModal);
}

function openEditBookingModal(bookingId) {
    const booking = bookingsData.find(b => b.id === bookingId);
    if (!booking) return;

    document.getElementById('edit-booking-id').value = booking.id;
    document.getElementById('edit-field-select').value = booking.fieldId;
    document.getElementById('edit-user-select').value = booking.userId;
    document.getElementById('edit-booking-date').value = booking.date;
    document.getElementById('edit-booking-time').value = booking.time;
    document.getElementById('edit-booking-duration').value = booking.duration;
    document.getElementById('edit-player-count').value = booking.players;
    document.getElementById('edit-team-name').value = booking.teamName || '';
    document.getElementById('edit-booking-status').value = booking.status;
    document.getElementById('edit-booking-price').value = booking.totalPrice;

    editFieldSelect.addEventListener('change', updateEditBookingPrice);

    showModal(editBookingModal);
}

function showConfirmModal(message, action) {
    document.getElementById('confirm-message').textContent = message;
    actionToConfirm = action;
    showModal(confirmModal);
}

function showModal(modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Booking CRUD Operations
function addBooking(formData) {
    const newBooking = {
        id: 'b' + Math.random().toString(36).substr(2, 9),
        fieldId: formData.fieldId,
        userId: formData.userId,
        date: formData.date,
        time: formData.time,
        duration: parseInt(formData.duration),
        players: parseInt(formData.players),
        teamName: formData.teamName || '',
        totalPrice: parseInt(formData.price),
        paymentMethod: 'admin',
        status: formData.status,
        createdAt: new Date().toISOString()
    };

    bookingsData.push(newBooking);
    saveBookingsData();
    renderBookings();
    showToast('Booking added successfully!');
    closeModal(addBookingModal);
}

function editBooking(formData) {
    const bookingIndex = bookingsData.findIndex(b => b.id === formData.id);

    if (bookingIndex !== -1) {
        bookingsData[bookingIndex] = {
            ...bookingsData[bookingIndex],
            fieldId: formData.fieldId,
            userId: formData.userId,
            date: formData.date,
            time: formData.time,
            duration: parseInt(formData.duration),
            players: parseInt(formData.players),
            teamName: formData.teamName || '',
            totalPrice: parseInt(formData.price),
            status: formData.status
        };

        saveBookingsData();
        renderBookings();
        showToast('Booking updated successfully!');
        closeModal(editBookingModal);
    }
}

function deleteBooking(bookingId) {
    const bookingIndex = bookingsData.findIndex(b => b.id === bookingId);

    if (bookingIndex !== -1) {
        bookingsData.splice(bookingIndex, 1);
        saveBookingsData();
        renderBookings();
        showToast('Booking deleted successfully!');
        closeModal(confirmModal);
    }
}

// Price Calculation Functions
function updateBookingPrice() {
    const fieldId = adminFieldSelect.value;
    const field = fieldsData.find(f => f.id === fieldId);
    if (field) {
        document.getElementById('admin-booking-price').value = field.price;
    }
}

function updateEditBookingPrice() {
    const fieldId = editFieldSelect.value;
    const field = fieldsData.find(f => f.id === fieldId);
    if (field) {
        document.getElementById('edit-booking-price').value = field.price;
    }
}

// Event Listeners
function setupEventListeners() {
    // Navigation
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        redirectToLogin();
    });

    addBookingBtn.addEventListener('click', openAddBookingModal);

    // Filters
    bookingStatusFilter.addEventListener('change', renderBookings);
    bookingDateRangeFilter.addEventListener('change', () => {
        customDateRange.style.display = bookingDateRangeFilter.value === 'custom' ? 'block' : 'none';
        renderBookings();
    });
    startDateInput.addEventListener('change', renderBookings);
    endDateInput.addEventListener('change', renderBookings);

    // Forms
    addBookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = getAddBookingFormData();
        addBooking(formData);
    });

    editBookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = getEditBookingFormData();
        editBooking(formData);
    });

    // Modal close handlers
    document.querySelectorAll('.modal .close').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            closeModal(modal);
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });

    // Confirmation modal
    confirmCancelBtn.addEventListener('click', () => closeModal(confirmModal));
    confirmActionBtn.addEventListener('click', () => {
        if (actionToConfirm) {
            actionToConfirm();
            actionToConfirm = null;
        }
    });

    // Mobile menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Form Handling Functions
function getAddBookingFormData() {
    return {
        fieldId: adminFieldSelect.value,
        userId: adminUserSelect.value,
        date: document.getElementById('admin-booking-date').value,
        time: document.getElementById('admin-booking-time').value,
        duration: document.getElementById('admin-booking-duration').value,
        players: document.getElementById('admin-player-count').value,
        teamName: document.getElementById('admin-team-name').value,
        price: document.getElementById('admin-booking-price').value,
        status: document.getElementById('admin-booking-status').value
    };
}

function getEditBookingFormData() {
    return {
        id: document.getElementById('edit-booking-id').value,
        fieldId: editFieldSelect.value,
        userId: editUserSelect.value,
        date: document.getElementById('edit-booking-date').value,
        time: document.getElementById('edit-booking-time').value,
        duration: document.getElementById('edit-booking-duration').value,
        players: document.getElementById('edit-player-count').value,
        teamName: document.getElementById('edit-team-name').value,
        price: document.getElementById('edit-booking-price').value,
        status: document.getElementById('edit-booking-status').value
    };
}

// Utility Functions
function saveBookingsData() {
    localStorage.setItem('bookingsData', JSON.stringify(bookingsData));
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function isSameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
}

function isSameWeek(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
    return diffDays < 7 && date1.getDay() >= date2.getDay();
}

function isSameMonth(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth();
}

function showToast(message, type = 'success') {
    // In a real implementation, you might use a proper toast library
    alert(`${type.toUpperCase()}: ${message}`);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function handleInitializationError(error) {
    showToast('Failed to load admin dashboard. Redirecting to login...', 'error');
    setTimeout(redirectToLogin, 3000);
}