// Import items and enchantments
import { items } from './items.js';
import { enchantments } from './enchantments.js';

document.addEventListener('DOMContentLoaded', () => {
    const itemSelect = document.getElementById('item');
    const enchantmentsContainer = document.getElementById('enchantments-container');
    const showEnchantmentsButton = document.getElementById('show-enchantments');

    // Populate item dropdown
    items.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item.charAt(0).toUpperCase() + item.slice(1).replace(/_/g, ' ');
        itemSelect.appendChild(option);
    });

    // Show enchantments toggle
    showEnchantmentsButton.onclick = function() {
        const isVisible = enchantmentsContainer.style.display === 'block';
        enchantmentsContainer.style.display = isVisible ? 'none' : 'block';

        if (!isVisible) {
            // Populate enchantments dropdown if not already populated
            enchantments.forEach(enchantment => {
                const option = document.createElement('option');
                option.value = enchantment;
                option.textContent = enchantment.charAt(0).toUpperCase() + enchantment.slice(1).replace(/_/g, ' ');
                enchantmentsContainer.appendChild(option);
            });
        }
    };

    document.getElementById('add-component').onclick = function() {
        const container = document.getElementById('components-container');
        const newComponent = document.createElement('div');
        newComponent.className = 'component';
        newComponent.innerHTML = `
            <select class="component-item">
                <option value="" disabled selected>Select Enchantment</option>
            </select>
            <input type="number" placeholder="Level" class="component-amount" value="1">
            <button class="remove-component">Remove</button>
        `;
        
        // Populate new component enchantment dropdown
        const enchantmentSelect = newComponent.querySelector('.component-item');
        enchantments.forEach(enchantment => {
            const option = document.createElement('option');
            option.value = enchantment;
            option.textContent = enchantment.charAt(0).toUpperCase() + enchantment.slice(1).replace(/_/g, ' ');
            enchantmentSelect.appendChild(option);
        });

        container.appendChild(newComponent);
        attachRemoveHandler(newComponent);
    };

    function attachRemoveHandler(componentDiv) {
        componentDiv.querySelector('.remove-component').onclick = function() {
            componentDiv.remove();
        };
    }

    document.getElementById('generate').onclick = function() {
        const item = document.getElementById('item').value;
        const amount = document.getElementById('amount').value;
        let command = `/give @a minecraft:${item}`;

        const components = document.querySelectorAll('.component');
        if (components.length > 0) {
            const enchantmentsList = Array.from(components).map(comp => {
                const enchantment = comp.querySelector('.component-item').value;
                const level = comp.querySelector('.component-amount').value;
                return enchantment ? `"${enchantment}":${level}` : null;
            }).filter(Boolean);

            if (enchantmentsList.length > 0) {
                command += `[Enchantments={${enchantmentsList.join(',')}}] `;
            }
        }

        command += `${amount}`;
        document.getElementById('output').innerText = command;
    };
});
