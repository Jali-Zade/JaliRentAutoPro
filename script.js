// Переключение темы
const toggleSwitch = document.getElementById('theme-toggle');
if (toggleSwitch) {
    toggleSwitch.addEventListener('change', () => {
        document.body.classList.toggle('light');
        localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
    });
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light');
        toggleSwitch.checked = true;
    }
}

// Массив автомобилей (image только в корне, не в specs)
const cars = [
    { id:1, name:"Hyundai Solaris", price:2500, brand:"Hyundai", pets:true, unlimited:false, conditioner:true, automatic:true, desc:"Седан, автомат, бензин", image:"images/cars/1.jpg", specs:{ hp:123, powerWeight:0.09, accel:10.5, maxSpeed:185, valves:4, weight:1150, payload:450, trunk:480, tank:50, drive:"передний", fuel:"бензин АИ-92", consumption:7.2 } },
    { id:2, name:"Toyota Corolla", price:3000, brand:"Toyota", pets:false, unlimited:true, conditioner:true, automatic:true, desc:"Седан, вариатор", image:"images/cars/2.jpg", specs:{ hp:140, powerWeight:0.1, accel:9.8, maxSpeed:195, valves:4, weight:1300, payload:500, trunk:470, tank:55, drive:"передний", fuel:"бензин АИ-95", consumption:6.8 } },
    { id:3, name:"BMW X3", price:8000, brand:"BMW", pets:true, unlimited:false, conditioner:true, automatic:true, desc:"Внедорожник, полный привод", image:"images/cars/3.jpg", specs:{ hp:249, powerWeight:0.12, accel:6.3, maxSpeed:235, valves:4, weight:1850, payload:650, trunk:550, tank:68, drive:"полный", fuel:"дизель", consumption:6.1 } },
    { id:4, name:"Kia Rio", price:2000, brand:"Kia", pets:true, unlimited:false, conditioner:true, automatic:false, desc:"Хэтчбек, механика", image:"images/cars/4.jpg", specs:{ hp:107, powerWeight:0.08, accel:11.2, maxSpeed:180, valves:4, weight:1160, payload:430, trunk:390, tank:50, drive:"передний", fuel:"бензин", consumption:7.0 } },
    { id:5, name:"Mercedes E-class", price:10000, brand:"Mercedes", pets:false, unlimited:false, conditioner:true, automatic:true, desc:"Бизнес-класс", image:"images/cars/5.jpg", specs:{ hp:194, powerWeight:0.11, accel:7.5, maxSpeed:240, valves:4, weight:1700, payload:550, trunk:540, tank:66, drive:"задний", fuel:"дизель", consumption:5.8 } },
    { id:6, name:"Renault Logan", price:1800, brand:"Renault", pets:true, unlimited:true, conditioner:false, automatic:false, desc:"Эконом, механика", image:"images/cars/6.jpg", specs:{ hp:82, powerWeight:0.07, accel:12.5, maxSpeed:172, valves:2, weight:1100, payload:400, trunk:510, tank:50, drive:"передний", fuel:"бензин", consumption:7.4 } },
    { id:7, name:"Skoda Octavia", price:3500, brand:"Skoda", pets:true, unlimited:true, conditioner:true, automatic:true, desc:"Лифтбек, просторный", image:"images/cars/7.jpg", specs:{ hp:150, powerWeight:0.1, accel:8.2, maxSpeed:220, valves:4, weight:1400, payload:520, trunk:600, tank:55, drive:"передний", fuel:"бензин", consumption:6.5 } },
    { id:8, name:"Volkswagen Polo", price:2200, brand:"Volkswagen", pets:false, unlimited:false, conditioner:true, automatic:true, desc:"Седан, автомат", image:"images/cars/8.jpg", specs:{ hp:110, powerWeight:0.085, accel:10.9, maxSpeed:190, valves:4, weight:1180, payload:460, trunk:460, tank:55, drive:"передний", fuel:"бензин", consumption:6.9 } },
    { id:9, name:"Nissan Qashqai", price:4000, brand:"Nissan", pets:true, unlimited:false, conditioner:true, automatic:true, desc:"Кроссовер", image:"images/cars/9.jpg", specs:{ hp:163, powerWeight:0.09, accel:9.2, maxSpeed:200, valves:4, weight:1520, payload:550, trunk:430, tank:60, drive:"передний", fuel:"бензин", consumption:7.3 } },
    { id:10, name:"Mitsubishi Outlander", price:4500, brand:"Mitsubishi", pets:true, unlimited:false, conditioner:true, automatic:true, desc:"7 мест", image:"images/cars/10.jpg", specs:{ hp:150, powerWeight:0.08, accel:10.1, maxSpeed:195, valves:4, weight:1650, payload:600, trunk:480, tank:63, drive:"полный", fuel:"бензин", consumption:8.2 } },
    { id:11, name:"Ford Focus", price:2800, brand:"Ford", pets:true, unlimited:false, conditioner:true, automatic:true, desc:"Хэтчбек", image:"images/cars/11.jpg", specs:{ hp:125, powerWeight:0.09, accel:10.0, maxSpeed:195, valves:4, weight:1270, payload:480, trunk:340, tank:55, drive:"передний", fuel:"бензин", consumption:7.0 } },
    { id:12, name:"Chevrolet Cruze", price:2600, brand:"Chevrolet", pets:false, unlimited:false, conditioner:true, automatic:false, desc:"Седан, механика", image:"images/cars/12.jpg", specs:{ hp:109, powerWeight:0.08, accel:11.3, maxSpeed:185, valves:4, weight:1250, payload:450, trunk:450, tank:60, drive:"передний", fuel:"бензин", consumption:7.2 } },
    { id:13, name:"Audi A4", price:7000, brand:"Audi", pets:false, unlimited:false, conditioner:true, automatic:true, desc:"Премиум седан", image:"images/cars/13.jpg", specs:{ hp:190, powerWeight:0.11, accel:7.1, maxSpeed:235, valves:4, weight:1550, payload:520, trunk:480, tank:58, drive:"передний", fuel:"бензин", consumption:6.4 } },
    { id:14, name:"Volvo XC60", price:9000, brand:"Volvo", pets:true, unlimited:false, conditioner:true, automatic:true, desc:"Безопасный кроссовер", image:"images/cars/14.jpg", specs:{ hp:235, powerWeight:0.11, accel:7.0, maxSpeed:220, valves:4, weight:1900, payload:620, trunk:505, tank:71, drive:"полный", fuel:"дизель", consumption:6.0 } },
    { id:15, name:"Lada Vesta", price:1500, brand:"Lada", pets:true, unlimited:true, conditioner:false, automatic:false, desc:"Бюджетный седан", image:"images/cars/15.jpg", specs:{ hp:106, powerWeight:0.09, accel:10.8, maxSpeed:185, valves:4, weight:1150, payload:480, trunk:480, tank:55, drive:"передний", fuel:"бензин", consumption:7.5 } },
    { id:16, name:"Honda CR-V", price:5500, brand:"Honda", pets:true, unlimited:false, conditioner:true, automatic:true, desc:"Надёжный кроссовер", image:"images/cars/16.jpg", specs:{ hp:190, powerWeight:0.1, accel:8.5, maxSpeed:210, valves:4, weight:1650, payload:550, trunk:580, tank:57, drive:"полный", fuel:"бензин", consumption:7.6 } },
    { id:17, name:"Mazda CX-5", price:6000, brand:"Mazda", pets:false, unlimited:false, conditioner:true, automatic:true, desc:"Дизайн и драйв", image:"images/cars/17.jpg", specs:{ hp:194, powerWeight:0.11, accel:8.0, maxSpeed:215, valves:4, weight:1600, payload:530, trunk:510, tank:58, drive:"передний", fuel:"бензин", consumption:7.2 } },
    { id:18, name:"Suzuki Vitara", price:3800, brand:"Suzuki", pets:true, unlimited:false, conditioner:true, automatic:true, desc:"Компактный SUV", image:"images/cars/18.jpg", specs:{ hp:140, powerWeight:0.1, accel:9.5, maxSpeed:195, valves:4, weight:1250, payload:480, trunk:375, tank:47, drive:"полный", fuel:"бензин", consumption:6.9 } },
    { id:19, name:"Peugeot 308", price:3200, brand:"Peugeot", pets:true, unlimited:false, conditioner:true, automatic:true, desc:"Французский стиль", image:"images/cars/19.jpg", specs:{ hp:130, powerWeight:0.09, accel:9.9, maxSpeed:200, valves:4, weight:1280, payload:470, trunk:420, tank:53, drive:"передний", fuel:"дизель", consumption:5.2 } },
    { id:20, name:"Tesla Model 3", price:12000, brand:"Tesla", pets:false, unlimited:true, conditioner:true, automatic:true, desc:"Электромобиль", image:"images/cars/20.jpg", specs:{ hp:283, powerWeight:0.16, accel:5.6, maxSpeed:225, valves:0, weight:1845, payload:500, trunk:425, tank:0, drive:"задний", fuel:"электричество", consumption:15.0 } }
];

// Функция отрисовки каталога
function renderCars() {
    const container = document.getElementById('car-list');
    if (!container) return;
    const brand = document.getElementById('brand-filter')?.value || 'Любая';
    const maxPrice = parseInt(document.getElementById('price-range')?.value || 10000);
    const petsChecked = document.querySelector('.smart-filter[data-filter="pets"]')?.checked || false;
    const unlimitedChecked = document.querySelector('.smart-filter[data-filter="unlimited"]')?.checked || false;
    const conditionerChecked = document.querySelector('.smart-filter[data-filter="conditioner"]')?.checked || false;
    const automaticChecked = document.querySelector('.smart-filter[data-filter="automatic"]')?.checked || false;

    let filtered = cars.filter(car => {
        if (brand !== 'Любая' && car.brand !== brand) return false;
        if (car.price > maxPrice) return false;
        if (petsChecked && !car.pets) return false;
        if (unlimitedChecked && !car.unlimited) return false;
        if (conditionerChecked && !car.conditioner) return false;
        if (automaticChecked && !car.automatic) return false;
        return true;
    });
    container.innerHTML = filtered.map(car => `
        <div class="car-card">
            <div class="car-image">
                <img src="${car.image || 'images/cars/placeholder.jpg'}" alt="${car.name}" loading="lazy">
            </div>
            <h3>${car.name}</h3>
            <div>${car.price} ₽/сутки</div>
            <div class="car-desc-small">${car.desc}</div>
            <button onclick="selectCar(${car.id})" class="btn-primary" style="margin-top: 10px;">Выбрать</button>
        </div>
    `).join('');
}

function selectCar(id) {
    localStorage.setItem('selectedCarId', id);
    location.href = 'car.html';
}

// Инициализация каталога (только на главной)
if (document.getElementById('car-list')) {
    renderCars();
    document.getElementById('brand-filter')?.addEventListener('change', renderCars);
    document.getElementById('price-range')?.addEventListener('input', (e) => {
        const priceValue = document.getElementById('price-value');
        if (priceValue) priceValue.innerText = `до ${e.target.value} ₽`;
        renderCars(); // исправлено!
    });
    document.querySelectorAll('.smart-filter').forEach(cb => cb.addEventListener('change', renderCars));
}

// ========== СТРАНИЦА АВТОМОБИЛЯ ==========
if (window.location.pathname.endsWith('car.html') || window.location.pathname.endsWith('car')) {
    const carId = localStorage.getItem('selectedCarId') || 1;
    const car = cars.find(c => c.id == carId) || cars[0];
    const basePrice = car.price;

    // Функция получения массива изображений (3 штуки)
    function getCarImages(car) {
        if (!car.image) return ['images/cars/placeholder.jpg'];
        const main = car.image;
        const second = main.replace(/(\.\w+)$/, '.2$1');
        const third = main.replace(/(\.\w+)$/, '.3$1');
        return [main, second, third];
    }

    // Функция построения слайдера
    function buildSlider(images) {
        const container = document.getElementById('car-slider');
        if (!container) {
            console.error('Контейнер #car-slider не найден');
            return;
        }

        container.innerHTML = `
            <div class="car-slides" id="carSlides"></div>
            <button class="slider-btn slider-prev" id="prevBtn">&#10094;</button>
            <button class="slider-btn slider-next" id="nextBtn">&#10095;</button>
            <div class="slider-dots" id="sliderDots"></div>
        `;

        const slidesContainer = document.getElementById('carSlides');
        const dotsContainer = document.getElementById('sliderDots');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        images.forEach((src, index) => {
            const slide = document.createElement('div');
            slide.className = 'car-slide';
            const img = document.createElement('img');
            img.src = src;
            img.alt = `${car.name} фото ${index + 1}`;
            slide.appendChild(img);
            slidesContainer.appendChild(slide);

            const dot = document.createElement('span');
            dot.className = 'slider-dot';
            dot.dataset.index = index;
            dotsContainer.appendChild(dot);
        });

        let currentIndex = 0;
        const totalSlides = images.length;
        let autoPlayInterval;
        const AUTO_PLAY_DELAY = 4000;

        const allSlides = slidesContainer.querySelectorAll('.car-slide');
        const allDots = dotsContainer.querySelectorAll('.slider-dot');

        function showSlide(index) {
            if (index < 0) index = totalSlides - 1;
            if (index >= totalSlides) index = 0;
            currentIndex = index;
            slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
            allDots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
        }

        function nextSlide() { showSlide(currentIndex + 1); }
        function prevSlide() { showSlide(currentIndex - 1); }

        function startAutoPlay() {
            stopAutoPlay();
            autoPlayInterval = setInterval(nextSlide, AUTO_PLAY_DELAY);
        }
        function stopAutoPlay() {
            if (autoPlayInterval) clearInterval(autoPlayInterval);
        }

        nextBtn.addEventListener('click', () => { nextSlide(); startAutoPlay(); });
        prevBtn.addEventListener('click', () => { prevSlide(); startAutoPlay(); });
        allDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const idx = parseInt(dot.dataset.index, 10);
                showSlide(idx);
                startAutoPlay();
            });
        });

        container.addEventListener('mouseenter', stopAutoPlay);
        container.addEventListener('mouseleave', startAutoPlay);

        showSlide(0);
        startAutoPlay();
    }

    const carImages = getCarImages(car);
    buildSlider(carImages);

    // Заполнение информации
    document.getElementById('car-name').innerText = car.name;
    document.getElementById('car-desc').innerText = car.desc;
    document.getElementById('base-price-display').innerHTML = `${car.price} ₽ / сутки`;

    // Характеристики
    const specs = car.specs;
    const specsContainer = document.getElementById('specs-grid');
    if (specsContainer) {
        specsContainer.innerHTML = `
            <div class="spec-item"><span>Мощность:</span> ${specs.hp} л.с.</div>
            <div class="spec-item"><span>Соотношение мощность/вес:</span> ${specs.powerWeight} л.с./кг</div>
            <div class="spec-item"><span>Разгон 0–100 км/ч:</span> ${specs.accel} с</div>
            <div class="spec-item"><span>Максимальная скорость:</span> ${specs.maxSpeed} км/ч</div>
            <div class="spec-item"><span>Клапанов на цилиндр:</span> ${specs.valves}</div>
            <div class="spec-item"><span>Снаряжённая масса:</span> ${specs.weight} кг</div>
            <div class="spec-item"><span>Грузоподъёмность:</span> ${specs.payload} кг</div>
            <div class="spec-item"><span>Объём багажника:</span> ${specs.trunk} л</div>
            <div class="spec-item"><span>Объём топливного бака:</span> ${specs.tank} л</div>
            <div class="spec-item"><span>Привод:</span> ${specs.drive}</div>
            <div class="spec-item"><span>Топливо:</span> ${specs.fuel}</div>
            <div class="spec-item"><span>Расход (смешанный):</span> ${specs.consumption} л/100 км</div>
        `;
    }

    // Альтернативы
    const cheaper = cars.find(c => c.price < basePrice && c.id !== car.id) || cars[0];
    const expensive = cars.find(c => c.price > basePrice && c.id !== car.id) || cars[19];
    const altContainer = document.getElementById('alt-cards');
    if (altContainer) {
        altContainer.innerHTML = `
            <div class="alt-card" onclick="selectCar(${cheaper.id})">${cheaper.name}<br><span class="alt-price">${cheaper.price} ₽ (-${Math.round((1 - cheaper.price/basePrice)*100)}%)</span></div>
            <div class="alt-card" onclick="selectCar(${expensive.id})">${expensive.name}<br><span class="alt-price">${expensive.price} ₽ (+${Math.round((expensive.price/basePrice -1)*100)}%)</span></div>
        `;
    }

    // Калькулятор услуг
    const extraCheckboxes = document.querySelectorAll('.extra');
    const finalSpan = document.getElementById('final-price');
    function updateTotal() {
        let extras = 0;
        extraCheckboxes.forEach(cb => {
            if (cb.checked) extras += parseInt(cb.dataset.price || 0);
        });
        const total = basePrice + extras;
        if (finalSpan) finalSpan.innerText = total + ' ₽';
    }
    extraCheckboxes.forEach(cb => cb.addEventListener('change', updateTotal));
    updateTotal();

    // Кнопка бронирования
    document.getElementById('book-now-btn')?.addEventListener('click', () => {
        const total = finalSpan?.innerText;
        localStorage.setItem('bookingTotal', total);
        location.href = 'booking.html';
    });

} // конец блока car.html

// Остальные страницы (бронирование, оплата)
// Валидация формы бронирования
const personalForm = document.getElementById('personal-form');
if (personalForm) {
    // Функции проверки
    function showError(inputId, message) {
        const input = document.getElementById(inputId);
        const errorSpan = document.getElementById(inputId + '-error');
        if (input) input.classList.add('error');
        if (errorSpan) errorSpan.textContent = message;
    }

    function clearError(inputId) {
        const input = document.getElementById(inputId);
        const errorSpan = document.getElementById(inputId + '-error');
        if (input) input.classList.remove('error');
        if (errorSpan) errorSpan.textContent = '';
    }

    function validateFullname(value) {
        if (!value.trim()) return 'Введите ФИО';
        const parts = value.trim().split(/\s+/);
        if (parts.length < 2 || parts.length > 3) return 'Должно быть 2 или 3 слова';
        const cyrillic = /^[а-яё-]+$/i;
        for (let part of parts) {
            if (!cyrillic.test(part)) return 'Только русские буквы и дефис';
        }
        return null; // ошибок нет
    }

    function validatePassport(value) {
        const cleaned = value.replace(/\s/g, '');
        if (!/^\d{10}$/.test(cleaned)) return 'Должно быть 10 цифр (серия 6 + номер 4)';
        // форматируем как 6 цифр пробел 4 цифры
        const formatted = cleaned.slice(0, 6) + ' ' + cleaned.slice(6);
        document.getElementById('passport').value = formatted;
        return null;
    }

    function validateDriverLicense(value) {
        if (!value.trim()) return 'Это поле обязательно для заполнения';
        return null;
    }

    function validateEmail(value) {
        if (!value.trim()) return 'Введите email';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) return 'Некорректный email';
        return null;
    }

    function validatePhone(value) {
        const raw = value.replace(/[\s()-]/g, '');
        // Разрешаем +7 или 8 в начале, затем 10 цифр
        const phoneRegex = /^(\+7|8)\d{10}$/;
        if (!phoneRegex.test(raw)) return 'Формат: +7 (XXX) XXX-XX-XX или 8 (XXX) XXX-XX-XX';
        return null;
    }

    personalForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Сброс ошибок
        ['fullname', 'passport', 'driver-license', 'email', 'phone'].forEach(clearError);

        let isValid = true;

        const fullname = document.getElementById('fullname').value;
        const passport = document.getElementById('passport').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const agree = document.getElementById('agree-oferta')?.checked;

        const fullnameError = validateFullname(fullname);
        if (fullnameError) {
            showError('fullname', fullnameError);
            isValid = false;
        }

        const passportError = validatePassport(passport);
        if (passportError) {
            showError('passport', passportError);
            isValid = false;
        }
        
        const driverLicense = document.getElementById('driver-license').value;
        const driverLicenseError = validateDriverLicense(driverLicense);
        if (driverLicenseError) {
            showError('driver-license', driverLicenseError);
            isValid = false;
        }

        const emailError = validateEmail(email);
        if (emailError) {
            showError('email', emailError);
            isValid = false;
        }

        const phoneError = validatePhone(phone);
        if (phoneError) {
            showError('phone', phoneError);
            isValid = false;
        }

        if (!agree) {
            alert('Необходимо согласиться с договором оферты');
            isValid = false;
        }

        if (isValid) {
            location.href = 'payment.html';
        }
    });

    // Опционально: очистка ошибки при вводе
    ['fullname', 'passport', 'driver-license', 'email', 'phone'].forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('input', () => clearError(id));
        }
    });
}

const fakePayBtn = document.getElementById('fake-pay');
if (fakePayBtn) {
    const amount = localStorage.getItem('bookingTotal') || '3 200 ₽';
    const amountSpan = document.getElementById('pay-amount');
    if (amountSpan) amountSpan.innerText = amount;
    fakePayBtn.addEventListener('click', () => {
        alert('В реальной системе здесь бы произошла оплата и выдача ЭЦП-договора.\nСпасибо за тест!');
    });
}