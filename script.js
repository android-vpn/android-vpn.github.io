document.addEventListener("DOMContentLoaded", () => {
    
    // Функция получения IP-адреса для виджета в шапке
    const fetchIPAddress = async () => {
        const ipSpan = document.getElementById("ip-address");
        
        try {
            // Обращаемся к бесплатному API для получения IP
            const response = await fetch("https://api.ipify.org?format=json");
            const data = await response.json();
            
            // Искусственная задержка для удержания внимания (ПФ фактор)
            setTimeout(() => {
                ipSpan.textContent = data.ip;
                ipSpan.classList.remove("ip-loading");
                ipSpan.style.color = "#f3f4f6"; // Делаем IP ярким после загрузки
            }, 1500);

        } catch (error) {
            // Фолбэк, если API недоступен
            setTimeout(() => {
                ipSpan.textContent = "Скрыт провайдером";
                ipSpan.classList.remove("ip-loading");
            }, 1000);
        }
    };

    // Запускаем функцию определения IP
    fetchIPAddress();
    // --- ДИНАМИЧЕСКИЕ ДАТЫ (SEO-ФАКТОР СВЕЖЕСТИ) ---
    
    // Получаем текущую дату в формате "24 марта 2026 г."
    const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const today = new Date().toLocaleDateString('ru-RU', dateOptions);
    document.getElementById('current-date').textContent = today;
    
    // Получаем текущий месяц и год для заголовка H1 (например, "Март 2026")
    const monthYearOptions = { month: 'long', year: 'numeric' };
    let monthYear = new Date().toLocaleDateString('ru-RU', monthYearOptions);
    
    // Делаем первую букву месяца заглавной и убираем "г." если есть
    monthYear = monthYear.charAt(0).toUpperCase() + monthYear.slice(1).replace(' г.', '');
    document.getElementById('current-month-year').textContent = monthYear;

    // --- ИНТЕРАКТИВНЫЙ СВИТЧЕР (ПОВЕДЕНЧЕСКИЙ ФАКТОР) ---
    const vpnToggle = document.getElementById('vpn-toggle');
    const statusGrid = document.getElementById('status-grid');
    const statusItems = statusGrid.querySelectorAll('.status-item');

    vpnToggle.addEventListener('click', () => {
        vpnToggle.classList.toggle('active');
        statusGrid.classList.toggle('active');

        const isActive = vpnToggle.classList.contains('active');

        // Обновляем тексты в реальном времени
        statusItems.forEach(item => {
            const statusText = item.querySelector('.service-status');
            const isSpeed = item.classList.contains('speed-item');

            if (isActive) {
                if (isSpeed) statusText.textContent = "100+ Мбит/с";
                else statusText.textContent = "Доступно";
            } else {
                if (isSpeed) statusText.textContent = "5-10 Мбит/с";
                else if (item.dataset.service === "YouTube") statusText.textContent = "Заблокирован";
                else if (item.dataset.service === "Instagram") statusText.textContent = "Недоступен";
                else statusText.textContent = "Ограничен";
            }
        });
    });
    // --- ИНТЕРАКТИВНЫЕ СТОРИЗ (HOWTO) ---
    let currentStep = 1;
    const totalSteps = 3;

    const updateStories = (step) => {
        // Убираем старые активные классы
        document.querySelectorAll('.story-step').forEach(s => s.classList.remove('active'));
        document.querySelectorAll('.progress-segment').forEach(s => s.classList.remove('active'));

        // Активируем нужные
        document.getElementById(`story-${step}`).classList.add('active');
        
        // Закрашиваем все предыдущие прогресс-бары + текущий
        for(let i = 1; i <= totalSteps; i++) {
            const segment = document.querySelector(`.progress-segment[data-step="${i}"]`);
            if (i <= step) segment.classList.add('active');
            else segment.classList.remove('active');
        }
    };

    document.getElementById('story-next').addEventListener('click', () => {
        if (currentStep < totalSteps) {
            currentStep++;
            updateStories(currentStep);
        }
    });

    document.getElementById('story-prev').addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            updateStories(currentStep);
        }
    });
});
