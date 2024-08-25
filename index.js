    class ElementCloner {
        constructor(selector) {
            this.element = document.querySelector(selector);
            if (!this.element) {
                throw new Error(`Element with selector "${selector}" not found.`);
            }
        }
    
        cloneTo(targetSelectors) {
            targetSelectors.forEach(targetSelector => {
                const targetElement = document.querySelector(targetSelector);
                if (targetElement) {
                    const clone = this.element.cloneNode(true); // Создаем новый клон для каждого контейнера
                    targetElement.appendChild(clone);
                } else {
                    console.warn(`Target element with selector "${targetSelector}" not found.`);
                }
            });
        }
    }
