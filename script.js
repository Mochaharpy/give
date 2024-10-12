const items = [
    "minecraft:air", "minecraft:acacia_boat", "minecraft:acacia_button", 
    "minecraft:acacia_door", "minecraft:acacia_fence", "minecraft:acacia_fence_gate", 
    "minecraft:acacia_leaves", "minecraft:acacia_log", "minecraft:acacia_planks", 
    "minecraft:acacia_sapling", "minecraft:acacia_sign", "minecraft:acacia_slab", 
    "minecraft:acacia_stairs", "minecraft:acacia_trapdoor", "minecraft:activator_rail", 
    "minecraft:allium", "minecraft:anvil", "minecraft:apple", "minecraft:armor_stand", 
    "minecraft:arrow", "minecraft:baked_potato", "minecraft:barrel", "minecraft:barrier", 
    "minecraft:beacon", "minecraft:bed", "minecraft:beetroot", "minecraft:beetroot_seeds", 
    "minecraft:beetroot_soup", "minecraft:bell", "minecraft:bone", "minecraft:bone_meal", 
    "minecraft:book", "minecraft:bookshelf", "minecraft:bow", "minecraft:bread", 
    "minecraft:brewing_stand", "minecraft:brick", "minecraft:brick_slab", 
    "minecraft:brick_stairs", "minecraft:brick_wall", "minecraft:brown_mushroom", 
    "minecraft:bucket", "minecraft:cake", "minecraft:carrot", "minecraft:carrot_on_a_stick", 
    "minecraft:cauldron", "minecraft:chainmail_boots", "minecraft:chainmail_chestplate", 
    "minecraft:chainmail_helmet", "minecraft:chainmail_leggings", "minecraft:charcoal", 
    "minecraft:chest", "minecraft:chest_minecart", "minecraft:chicken", 
    "minecraft:chipped_anvil", "minecraft:chiseled_quartz_block", "minecraft:chiseled_stone_bricks", 
    "minecraft:clay", "minecraft:clock", "minecraft:coal", "minecraft:coal_block", 
    "minecraft:coal_ore", "minecraft:compass", "minecraft:comparator", "minecraft:composter", 
    "minecraft:conduit", "minecraft:cooked_beef", "minecraft:cooked_chicken", 
    "minecraft:cooked_cod", "minecraft:cooked_mutton", "minecraft:cooked_porkchop", 
    "minecraft:cooked_rabbit", "minecraft:cooked_salmon", "minecraft:cookie", 
    "minecraft:crossbow", "minecraft:diamond", "minecraft:diamond_axe", 
    "minecraft:diamond_boots", "minecraft:diamond_chestplate", "minecraft:diamond_helmet", 
    "minecraft:diamond_horse_armor", "minecraft:diamond_leggings", "minecraft:diamond_pickaxe", 
    "minecraft:diamond_shovel", "minecraft:diamond_sword", "minecraft:diamond_block", 
    "minecraft:diamond_ore", "minecraft:dirt", "minecraft:dispenser", "minecraft:double_plant", 
    "minecraft:dragon_breath", "minecraft:dragon_egg", "minecraft:dry_kelp", 
    "minecraft:dry_kelp_block", "minecraft:egg", "minecraft:emerald", "minecraft:emerald_block", 
    "minecraft:emerald_ore", "minecraft:end_crystal", "minecraft:end_rod", 
    "minecraft:end_stone", "minecraft:end_stone_brick", "minecraft:experience_bottle", 
    "minecraft:feather", "minecraft:fermented_spider_eye", "minecraft:fire_charge", 
    "minecraft:firework_rocket", "minecraft:firework_star", "minecraft:fish", 
    "minecraft:flint", "minecraft:flint_and_steel", "minecraft:flower_pot", 
    "minecraft:gold_ingot", "minecraft:gold_nugget", "minecraft:gold_block", 
    "minecraft:gold_ore", "minecraft:golden_apple", "minecraft:golden_carrot", 
    "minecraft:golden_horse_armor", "minecraft:granite", "minecraft:gray_stained_glass", 
    "minecraft:green_stained_glass", "minecraft:gunpowder", "minecraft:hay_block", 
    "minecraft:heart_of_the_sea", "minecraft:hopper", "minecraft:ice", 
    "minecraft:iron_axe", "minecraft:iron_boots", "minecraft:iron_chestplate", 
    "minecraft:iron_helmet", "minecraft:iron_horse_armor", "minecraft:iron_leggings", 
    "minecraft:iron_nugget", "minecraft:iron_pickaxe", "minecraft:iron_shovel", 
    "minecraft:iron_sword", "minecraft:iron_block", "minecraft:iron_ore", 
    "minecraft:item_frame", "minecraft:kelp", "minecraft:ladder", "minecraft:lapis_lazuli", 
    "minecraft:lapis_block", "minecraft:lapis_ore", "minecraft:lava_bucket", 
    "minecraft:lead", "minecraft:leather", "minecraft:leather_boots", 
    "minecraft:leather_chestplate", "minecraft:leather_helmet", "minecraft:leather_leggings", 
    "minecraft:lever", "minecraft:light_blue_stained_glass", "minecraft:light_gray_stained_glass", 
    "minecraft:lily_pad", "minecraft:lime_stained_glass", "minecraft:magenta_stained_glass", 
    "minecraft:magma_block", "minecraft:map", "minecraft:melon", "minecraft:melon_seeds", 
    "minecraft:melon_slice", "minecraft:music_disc", "minecraft:name_tag", 
    "minecraft:nether_brick", "minecraft:nether_brick_fence", "minecraft:nether_brick_stairs", 
    "minecraft:nether_star", "minecraft:nether_wart", "minecraft:obsidian", 
    "minecraft:orange_stained_glass", "minecraft:papaya", "minecraft:peony", 
    "minecraft:potato", "minecraft:potato_baked", "minecraft:power_rail", 
    "minecraft:prismarine", "minecraft:prismarine_bricks", "minecraft:prismarine_stairs", 
    "minecraft:pumpkin", "minecraft:pumpkin_pie", "minecraft:quartz", 
    "minecraft:quartz_block", "minecraft:quartz_bricks", "minecraft:quartz_slab", 
    "minecraft:quartz_stairs", "minecraft:redstone", "minecraft:redstone_block", 
    "minecraft:redstone_lamp", "minecraft:redstone_ore", "minecraft:redstone_torch", 
    "minecraft:rotten_flesh", "minecraft:saddle", "minecraft:salmon", 
    "minecraft:sand", "minecraft:sandstone", "minecraft:sandstone_slab", 
    "minecraft:sandstone_stairs", "minecraft:scute", "minecraft:shears", 
    "minecraft:shulker_shell", "minecraft:sign", "minecraft:skeleton", 
    "minecraft:slime_ball", "minecraft:smooth_quartz", "minecraft:smooth_red_sandstone", 
    "minecraft:smooth_sandstone", "minecraft:smooth_stone", "minecraft:spawner", 
    "minecraft:splash_potion", "minecraft:sponge", "minecraft:stone", 
    "minecraft:stone_bricks", "minecraft:stone_brick_slab", "minecraft:stone_brick_stairs", 
    "minecraft:stone_wall", "minecraft:stripped_acacia_log", "minecraft:stripped_birch_log", 
    "minecraft:stripped_dark_oak_log", "minecraft:stripped_jungle_log", 
    "minecraft:sweet_berries", "minecraft:tallgrass", "minecraft:target", 
    "minecraft:terracotta", "minecraft:tnt", "minecraft:torch", 
    "minecraft:totem_of_undying", "minecraft:trapped_chest", "minecraft:tripwire_hook", 
    "minecraft:tropical_fish", "minecraft:water_bucket", "minecraft:wet_sponge", 
    "minecraft:wheat", "minecraft:wheat_seeds", "minecraft:yellow_stained_glass", 
    "minecraft:yellow_stained_glass_pane"
];

const itemInput = document.getElementById('item');
const itemList = document.getElementById('item-list');

function populateItemList() {
    itemList.innerHTML = '';
    items.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item;
        div.onclick = () => {
            itemInput.value = item;
            itemList.innerHTML = ''; // Clear dropdown on selection
        };
        itemList.appendChild(div);
    });
}

function filterItems() {
    const filter = itemInput.value.toLowerCase();
    const filteredItems = items.filter(item => item.toLowerCase().includes(filter));
    itemList.innerHTML = '';
    filteredItems.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item;
        div.onclick = () => {
            itemInput.value = item;
            itemList.innerHTML = ''; // Clear dropdown on selection
        };
        itemList.appendChild(div);
    });
    itemList.style.display = filteredItems.length ? 'block' : 'none';
}

// Hide dropdown when clicking outside
document.addEventListener('click', (event) => {
    if (!itemInput.contains(event.target)) {
        itemList.style.display = 'none';
    }
});

document.getElementById('add-component').onclick = function() {
    const container = document.getElementById('components-container');
    const newComponent = document.createElement('div');
    newComponent.className = 'component';
    newComponent.innerHTML = `
        <input type="text" placeholder="Enchantment" class="component-item" value="minecraft:">
        <input type="number" placeholder="Level" class="component-amount" value="1">
        <button class="remove-component">Remove</button>
    `;
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
    let command = `/give @a ${item}`;

    const components = document.querySelectorAll('.component');
    if (components.length > 0) {
        const enchantments = Array.from(components).map(comp => {
            const enchantment = comp.querySelector('.component-item').value;
            const level = comp.querySelector('.component-amount').value;
            return `"${enchantment}":${level}`;
        }).filter(Boolean);
        
        command += `[enchantments={levels:{${enchantments.join(',')}}}] ${amount}`;
    } else {
        command += ` ${amount}`;
    }

    document.getElementById('output').innerText = command;
};

// Initialize the dropdown
populateItemList();
