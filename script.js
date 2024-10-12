const items = [
    "air", "acacia_boat", "acacia_button", 
    "acacia_door", "acacia_fence", "acacia_fence_gate", 
    "acacia_leaves", "acacia_log", "acacia_planks", 
    "acacia_sapling", "acacia_sign", "acacia_slab", 
    "acacia_stairs", "acacia_trapdoor", "activator_rail", 
    "allium", "anvil", "apple", 
    "armor_stand", "arrow", "baked_potato", 
    "barrel", "barrier", "beacon", 
    "bed", "beetroot", "beetroot_seeds", 
    "beetroot_soup", "bell", "bone", 
    "bone_meal", "book", "bookshelf", 
    "bow", "bread", "brewing_stand", 
    "brick", "brick_slab", "brick_stairs", 
    "brick_wall", "brown_mushroom", "bucket", 
    "cake", "carrot", "carrot_on_a_stick", 
    "cauldron", "chainmail_boots", "chainmail_chestplate", 
    "chainmail_helmet", "chainmail_leggings", "charcoal", 
    "chest", "chest_minecart", "chicken", 
    "chipped_anvil", "chiseled_quartz_block", "chiseled_stone_bricks", 
    "clay", "clock", "coal", 
    "coal_block", "coal_ore", "compass", 
    "comparator", "composter", "conduit", 
    "cooked_beef", "cooked_chicken", "cooked_cod", 
    "cooked_mutton", "cooked_porkchop", "cooked_rabbit", 
    "cooked_salmon", "cookie", "crossbow", 
    "diamond", "diamond_axe", "diamond_boots", 
    "diamond_chestplate", "diamond_helmet", "diamond_horse_armor", 
    "diamond_leggings", "diamond_pickaxe", "diamond_shovel", 
    "diamond_sword", "diamond_block", "diamond_ore", 
    "dirt", "dispenser", "double_plant", 
    "dragon_breath", "dragon_egg", "dry_kelp", 
    "dry_kelp_block", "egg", "emerald", 
    "emerald_block", "emerald_ore", "end_crystal", 
    "end_rod", "end_stone", "end_stone_brick", 
    "experience_bottle", "feather", "fermented_spider_eye", 
    "fire_charge", "firework_rocket", "firework_star", 
    "fish", "flint", "flint_and_steel", 
    "flower_pot", "gold_ingot", "gold_nugget", 
    "gold_block", "gold_ore", "golden_apple", 
    "golden_carrot", "golden_horse_armor", "granite", 
    "gray_stained_glass", "green_stained_glass", "gunpowder", 
    "hay_block", "heart_of_the_sea", "hopper", 
    "ice", "iron_axe", "iron_boots", 
    "iron_chestplate", "iron_helmet", "iron_horse_armor", 
    "iron_leggings", "iron_nugget", "iron_pickaxe", 
    "iron_shovel", "iron_sword", "iron_block", 
    "iron_ore", "item_frame", "kelp", 
    "ladder", "lapis_lazuli", "lapis_block", 
    "lapis_ore", "lava_bucket", "lead", 
    "leather", "leather_boots", "leather_chestplate", 
    "leather_helmet", "leather_leggings", "lever", 
    "light_blue_stained_glass", "light_gray_stained_glass", "lily_pad", 
    "lime_stained_glass", "magenta_stained_glass", "magma_block", 
    "map", "melon", "melon_seeds", 
    "melon_slice", "music_disc", "name_tag", 
    "nether_brick", "nether_brick_fence", "nether_brick_stairs", 
    "nether_star", "nether_wart", "obsidian", 
    "orange_stained_glass", "papaya", "peony", 
    "potato", "potato_baked", "power_rail", 
    "prismarine", "prismarine_bricks", "prismarine_stairs", 
    "pumpkin", "pumpkin_pie", "quartz", 
    "quartz_block", "quartz_bricks", "quartz_slab", 
    "quartz_stairs", "redstone", "redstone_block", 
    "redstone_lamp", "redstone_ore", "redstone_torch", 
    "rotten_flesh", "saddle", "salmon", 
    "sand", "sandstone", "sandstone_slab", 
    "sandstone_stairs", "scute", "shears", 
    "shulker_shell", "sign", "skeleton", 
    "slime_ball", "smooth_quartz", "smooth_red_sandstone", 
    "smooth_sandstone", "smooth_stone", "spawner", 
    "splash_potion", "sponge", "stone", 
    "stone_bricks", "stone_brick_slab", "stone_brick_stairs", 
    "stone_wall", "stripped_acacia_log", "stripped_birch_log", 
    "stripped_dark_oak_log", "stripped_jungle_log", "sweet_berries", 
    "tallgrass", "target", "terracotta", 
    "tnt", "torch", "totem_of_undying", 
    "trapped_chest", "tripwire_hook", "tropical_fish", 
    "water_bucket", "wet_sponge", "wheat", 
    "wheat_seeds", "yellow_stained_glass", "yellow_stained_glass_pane",
    "netherite_ingot", "netherite_block", "netherite_axe", 
    "netherite_boots", "netherite_chestplate", "netherite_helmet", 
    "netherite_leggings", "netherite_pickaxe", "netherite_shovel", 
    "netherite_sword", "sculk_sensor", "sculk_catalyst",
    "sculk_shrieker", "swift_sneak", "ancient_debris", 
    "chiseled_bookshelf", "echo_shard", "recovery_compass",
    "tinted_glass", "candle", "candle_cake",
    "sculk_vein", "sculk_sensors", "cobbled_deepslate",
    "cobbled_deepslate_slab", "cobbled_deepslate_stairs", "cobbled_deepslate_wall",
    "deepslate", "deepslate_brick_slab", "deepslate_brick_stairs",
    "deepslate_brick_wall", "deepslate_tile_slab", "deepslate_tile_stairs",
    "deepslate_tile_wall", "infested_stone", "infested_cobblestone",
    "infested_deepslate", "infested_stone_bricks", "infested_cracked_stone_bricks",
    "suspicious_stew", "bundle", "pointed_dripstone", 
    "dripstone_block", "mud", "mud_brick", 
    "mud_brick_slab", "mud_brick_stairs", "mud_brick_wall",
    "moss_block", "moss_carpet", "mossy_cobblestone", 
    "mossy_cobblestone_slab", "mossy_cobblestone_stairs", "mossy_cobblestone_wall", 
    "soul_campfire", "soul_fire", "soul_lantern", 
    "soul_soil", "soul_torch", "wheat_seeds"
];

const enchantments = [
    "protection", "fire_protection", "feather_falling", 
    "blast_protection", "projectile_protection", "thorns", 
    "sharpness", "smite", "bane_of_arthropods", 
    "knockback", "fire_aspect", "looting", 
    "efficiency", "silk_touch", "unbreaking", 
    "fortune", "power", "punch", 
    "flame", "infinity", "luck_of_the_sea", 
    "lure", "frost_walker", "depth_strider", 
    "respiration", "aqua_affinity", "mending", 
    "vanishing_curse", "binding_curse", "soul_speed",
    "swift_sneak", "wind_burst", "breach", "density"
];

const itemInput = document.getElementById('item');
const itemList = document.getElementById('item-list');
const enchantmentList = document.getElementById('enchantment-list');
const enchantmentContainer = document.getElementById('enchantment-container');
const toggleEnchantmentsButton = document.getElementById('toggle-enchantments');

function populateItemList() {
    items.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `minecraft:${item}`;
        div.onclick = () => {
            itemInput.value = `minecraft:${item}`;
            itemList.innerHTML = ''; // Clear dropdown on selection
            itemList.style.display = 'none'; // Hide dropdown
        };
        itemList.appendChild(div);
    });
}

function filterItems() {
    const filter = itemInput.value.toLowerCase().replace("minecraft:", "");
    const filteredItems = items.filter(item => item.toLowerCase().includes(filter));
    itemList.innerHTML = '';
    filteredItems.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `minecraft:${item}`;
        div.onclick = () => {
            itemInput.value = `minecraft:${item}`;
            itemList.innerHTML = ''; // Clear dropdown on selection
            itemList.style.display = 'none'; // Hide dropdown
        };
        itemList.appendChild(div);
    });
    itemList.style.display = filteredItems.length ? 'block' : 'none';
}

function populateEnchantmentList() {
    enchantments.forEach(enchantment => {
        const li = document.createElement('li');
        li.textContent = `minecraft:${enchantment}`;
        li.onclick = () => {
            addEnchantment(`minecraft:${enchantment}`);
        };
        enchantmentList.appendChild(li);
    });
}

function addEnchantment(enchantment) {
    const container = document.getElementById('components-container');
    const newComponent = document.createElement('div');
    newComponent.className = 'component';
    newComponent.innerHTML = `
        <input type="text" class="component-item" value="${enchantment}" readonly>
        <input type="number" class="component-amount" value="1" min="1">
        <button class="remove-component">Remove</button>
    `;
    container.appendChild(newComponent);
    attachRemoveHandler(newComponent);
}

function attachRemoveHandler(componentDiv) {
    componentDiv.querySelector('.remove-component').onclick = function() {
        componentDiv.remove();
    };
}

// Hide dropdown when clicking outside
document.addEventListener('click', (event) => {
    if (!itemInput.contains(event.target)) {
        itemList.style.display = 'none';
    }
});

itemInput.addEventListener('input', filterItems);

document.getElementById('generate').onclick = function() {
    const item = itemInput.value;
    const amount = document.getElementById('amount').value;
    let command = `/give @a ${item}`;

    const components = document.querySelectorAll('.component');
    if (components.length > 0) {
        const enchantments = Array.from(components).map(comp => {
            const enchantment = comp.querySelector('.component-item').value;
            const level = comp.querySelector('.component-amount').value;
            return `"${enchantment}":${level}`;
        }).filter(Boolean);
        
        if (enchantments.length > 0) {
            command += `[enchantments={levels:{${enchantments.join(',')}}}]`;
        }
    }

    command += ` ${amount}`;
    document.getElementById('output').innerText = command;
};

toggleEnchantmentsButton.onclick = function() {
    const isExpanded = enchantmentContainer.style.display === 'block';
    enchantmentContainer.style.display = isExpanded ? 'none' : 'block';
    toggleEnchantmentsButton.textContent = isExpanded ? 'Show Enchantments' : 'Hide Enchantments';
};

// Initialize the dropdown and enchantment list
populateItemList();
populateEnchantmentList();
