/**
 * 该模块适用于创建和修改方块. 
 * 术语 "block" 和 "tile" 存在存在着差异,这是由于他们的用法不同: 
 * "block" 指的是存在于背包里的方块,而 "tile" 指的是放置世界上的方块,对部分原版方块来说两者的ID不同. 
 * 请使用 [[Block.convertBlockToItemId]] 和 [[Block.convertItemToBlockId]]来进行id转换.
 */
declare namespace Block {
	/**
	 * @param id 方块的字符串ID 
	 * @returns 通过方块的字符串ID来返回其对应的数字ID,如输入是数字ID,则返回其仍是数字ID.
	 */
	function getNumericId(id: string | number): number;

	/**
	 * 使用指定数据创建新方块
	 * @param nameID 方块的字符串ID, 您应该先使用 [[IDRegistry.genBlockID]] 注册.
	 * @param defineData 方块所包含全部变种的数组,每个变种对应着方块的特殊值,按照数组顺序分配特殊值.
	 * @param blockType [[SpecialType]] object, either java-object returned by
	 * [[Block.createSpecialType]] or js-object with the required properties, 
	 * you can also pass special type name, if the type was previously 
	 * registered
	 */
	function createBlock(nameID: string, defineData: BlockVariation[], blockType?: SpecialType | string): void;

	/**
	 * 使用指定数据创建新方块, creating four variations for 
	 * each of the specified variations to be able to place it facing flayer 
	 * with the front side and defines the appropriate behavior. Useful for 
	 * different machines and mechanisms
	 * @param nameID 方块的字符串ID, 您应该先使用 [[IDRegistry.genBlockID]] 注册.
	 * @param defineData array containing all variations of the block. Each 
	 * variation corresponds to four block data values, data values are assigned 
	 * according to variations order
	 * @param blockType [[SpecialType]] object, either java-object returned by
	 * [[Block.createSpecialType]] or js-object with the required properties, 
	 * you can also pass special type name, if the type was previously 
	 * registered
	 */
	function createBlockWithRotation(nameID: string, defineData: BlockVariation[], blockType?: SpecialType | string): void;

	/**
	 * @param id 数字方块ID
	 * @returns true, if the specified block id is a vanilla block
	 */
	function isNativeTile(id: number): boolean;

	/**
	 * Converts tile id to the block id
	 * @param id numeric tile id
	 * @returns 数字方块ID corresponding to the given tile id
	 */
	function convertBlockToItemId(id: number): number;

	/**
	 * Converts block id to the tile id
	 * @param id numeric tile id
	 * @returns numeric tile id corresponding to the given block id
	 */
	function convertItemToBlockId(id: number): number;

	/**
	 * Same as [[Block.registerDropFunction]] but accepts only numeric 
	 * tile id as the first param
	 */
	function registerDropFunctionForID(numericID: number, dropFunc: DropFunction, level?: number): boolean;

	function registerEntityInsideFunctionForID(numericID: number, entityInsideFunc: EntityInsideFunction): void

	/**
	 * Registers function used by Core Engine to determine block drop for the 
	 * specified block id
	 * @param numericID tile string or numeric id
	 * @param dropFunc function to be called to determine what will be dropped 
	 * when the block is broken
	 * @param level if level is specified and is not 0, digging level of the
	 * block is additionally set
	 * @returns true, if specified string or numeric id exists and the function
	 * was registered correctly, false otherwise
	 */
	function registerDropFunction(nameID: string | number, dropFunc: DropFunction, level?: number): boolean;

	/**
	 * Same as [[Block.registerPopResourcesFunction]] but accepts only numeric 
	 * tile id as the first param
	 */
	function registerPopResourcesFunctionForID(numericID: number, func: PopResourcesFunction): void;

	/**
	 * Registered function used by Core Engine to determine block drop for the
	 * specified block id
	 * @param nameID tile string or numeric id 
	 * @param func function to be called when a block in the world is broken by
	 * environment (explosions, pistons, etc.)
	 * @returns true, if specified string or numeric id exists and the function
	 * was registered correctly, false otherwise
	 */
	function registerPopResourcesFunction(nameID: string | number, func: PopResourcesFunction): void;

	/**
	 * Same as [[Block.setDestroyLevel]] but accepts only numeric 
	 * tile id as the first param
	 */
	function setDestroyLevelForID(id: number, level: number, resetData?: boolean): void;

	/**
	 * Registers a default destroy function for the specified block, considering
	 * its digging level
	 * @param nameID tile string id
	 * @param level digging level of the block
	 * @param resetData if true, the block is dropped with data equals to 0
	 */
	function setDestroyLevel(nameID: string | number, level: number, resetData?: boolean): void;

	/**
	 * Sets destroy time for the block with specified id
	 * @param nameID string or 数字方块ID
	 * @param time destroy time for the block, in ticks
	 */
	function setDestroyTime(nameID: string | number, time: number): void;

	/**
	 * @param numericID 数字方块ID
	 * @returns true, if block is solid, false otherwise
	 */
	function isSolid(numericID: number): boolean;

	/**
	 * @param numericID 数字方块ID
	 * @returns destroy time of the block, in ticks
	 */
	function getDestroyTime(numericID: number): number;

	/**
	 * @param numericID 数字方块ID
	 * @returns explosion resistance of the block
	 */
	function getExplosionResistance(numericID: number): number;

	/**
	 * @param numericID 数字方块ID
	 * @returns friction of the block
	 */
	function getFriction(numericID: number): number;

	/**
	 * @param numericID 数字方块ID
	 * @returns translucency of the block
	 */
	function getTranslucency(numericID: number): number;

	/**
	 * @param numericID 数字方块ID
	 * @returns light level, emitted by block, from 0 to 15
	 */
	function getLightLevel(numericID: number): number;

	/**
	 * @param numericID 数字方块ID
	 * @returns light opacity of the block, from 0 to 15
	 */
	function getLightOpacity(numericID: number): number;

	/**
	 * @param numericID 数字方块ID
	 * @returns render layer of the block
	 */
	function getRenderLayer(numericID: number): number;

	/**
	 * @param numericID 数字方块ID
	 * @returns render type of the block
	 */
	function getRenderType(numericID: number): number;

	/**
	 * Temporarily sets destroy time for block, saving the old value for the 
	 * further usage
	 * @param numericID 数字方块ID
	 * @param time new destroy time in ticks
	 */
	function setTempDestroyTime(numericID: number, time: number): void;

	/**
	 * Registers material and digging level for the specified block
	 * @param nameID block numeric or string id
	 * @param material material name
	 * @param level block's digging level
	 */
	function setBlockMaterial(nameID: string | number, material: string, level: number): void;

	/**
	 * Makes block accept redstone signal
	 * @deprecated use [[Block.setupAsRedstoneReceiver]] and 
	 * [[Block.setupAsRedstoneEmitter]] instead
	 * @param nameID block numeric or string id
	 * @param data block data, currently not used
	 * @param isRedstone if true, the redstone changes at the block will notify
	 * the "RedstoneSignal" callback
	 */
	function setRedstoneTile(nameID: string | number, data: number, isRedstone: boolean): void;

	/**
	 * Gets drop for the specified block. Used mostly by Core Engine's 
	 * [[ToolAPI]], though, can be useful in the mods, too
	 * @param block block info
	 * @param item item that was (or is going to be) used to break the block
	 * @param coords coordinates where the block was (or is going to be) broken 
	 * @returns block drop, the array of arrays, each containing three values: 
	 * id, count and data respectively
	 */
	function getBlockDropViaItem(block: Tile, item: ItemInstance, coords: Vector, region: BlockSource): ItemInstanceArray[];

	/**
	 * Same as [[Block.registerPlaceFunction]] but accepts only numeric 
	 * tile id as the first param
	 */
	function registerPlaceFunctionForID(block: number, func: PlaceFunction): void;

	/**
	 * Registers function to be called when the block is placed in the world
	 * @param nameID block numeric or string id
	 * @param func function to be called when the block is placed in the world
	 */
	function registerPlaceFunction(nameID: string | number, func: PlaceFunction): void;

	/**
	 * Sets block box shape
	 * @param id block numeric id
	 * @param pos1 block lower corner position, in voxels (1/16 of the block)
	 * @param pos2 block upper conner position, in voxels (1/16 of the block)
	 * @param data block data
	 */
	function setBlockShape(id: number, pos1: Vector, pos2: Vector, data?: number): void;

	/**
	 * Same as [[Block.setBlockShape]], but accepts coordinates as scalar 
	 * params, not objects
	 * @param id block numeric id
	 * @param data  block data
	 */
	function setShape(id: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, data?: number): void;

	/**
	 * Creates a new special type using specified params and registers it by 
	 * name
	 * @param description special type properties
	 * @param nameKey string name to register the special type
	 */
	function createSpecialType(description: SpecialType, nameKey?: string): number;


	/**
	 * @deprecated No longer supported
	 */
	function setPrototype(nameID: string | number, Prototype: any): number;

	/**
	 * @param id 数字方块ID
	 * @returns the color specified block is displayed on the vanilla maps
	 */
	function getMapColor(id: number): number;

	/**
	 * Makes block invoke callback randomly depending on game speed
	 * @param id block id to register for random ticks
	 * @param callback function to be called on random block tick
	 */
	function setRandomTickCallback(id: number, callback: RandomTickFunction): void;

	/**
	 * Makes block invoke callback randomly depending on game speed. Occurs more 
	 * often then [[Block.setRandomTickCallback]] and only if the block is not
	 * far away from player
	 * @param id block id to register
	 * @param callback function to be called 
	 */
	function setAnimateTickCallback(id: number, callback: AnimateTickFunction): void;

	/**
	 * Makes block receive redstone signals via "RedstoneSignal" callback
	 * @param id block numeric or string id
	 * @param connectToRedstone if true, redstone wires will connect to the block
	 */
	function setupAsRedstoneReceiver(id: number | string, connectToRedstone: boolean): void;

	/**
	 * Makes block emit redstone signal
	 * @param id block numeric or string id
	 * @param connectToRedstone if true, redstone wires will connect to the block
	 */
	function setupAsRedstoneEmitter(id: number | string, connectToRedstone: boolean): void;

	/**
	 * Removes all the redstone functionality from the block
	 * @param id block numeric or string id
	 */
	function setupAsNonRedstoneTile(id: number | string): void;

	function registerNeighbourChangeFunction(name: string | number, func: NeighbourChangeFunction): void;

	function registerNeighbourChangeFunctionForID(id: number, func: NeighbourChangeFunction): void;

	/**
	 * @returns whether the block of given id can contain liquid inside
	 */
	function canContainLiquid(id: number): boolean;

	/**
	 * @returns whether the block of given id can be an extra block 
	 * (it's the block that can be set inside of another blocks, for ex. water and other liquids)
	 */
	function canBeExtraBlock(id: number): boolean;

	type ColorSource = "grass" | "leaves" | "water";

	type Sound = "normal"
		| "gravel"
		| "wood"
		| "grass"
		| "metal"
		| "stone"
		| "cloth"
		| "glass"	
		| "sand"
		| "snow"
		| "ladder"
		| "anvil"
		| "slime"
		| "silent"
		| "itemframe"
		| "turtle_egg"
		| "bamboo"
		| "bamboo_sapling"
		| "lantern"
		| "scaffolding"
		| "sweet_berry_bush"
		| "default";

	/**
	 * Special types are used to set properties to the block. Unlike items, 
	 * blocks properties are defined using special types, due to old Inner 
	 * Core's block ids limitations 
	 */
	interface SpecialType {
		/**
		 * Unique string identifier of the SpecialType
		 */
		name?: string,

		/**
		 * Vanilla block ID to inherit some of the properties. Default is 0
		 */
		base?: number,

		/**
		 * Block material constant. Default is 3
		 */
		material?: number,

		/**
		 * If true, the block is not transparent. Default is false
		 */
		solid?: boolean,

		/**
		 * If true, all block faces are rendered, otherwise back faces are not
		 * rendered (for optimization purposes). Default is false
		 */
		renderallfaces?: boolean,

		/**
		 * Sets render type of the block. Default is 0 (full block), use other 
		 * values to change block's shape
		 */
		rendertype?: number,

		/**
		 * Specifies the layer that is used to render the block. Default is 4
		 */
		renderlayer?: number,

		/**
		 * If non-zero value is used, the block emits light of that value. 
		 * Default is false, use values from 1 to 15 to set light level
		 */
		lightlevel?: number,

		/**
		 * Specifies how opaque the block is. Default is 0 (solid), use values 
		 * from 1 to 15 to make the block opaque
		 */
		lightopacity?: number,

		/**
		 * Specifies how block resists to the explosions. Default value is 3
		 */
		explosionres?: number,

		/**
		 * Specifies how player walks on this block. The higher the friction is,
		 * the more difficult it is to change speed and direction. Default value
		 * is 0.6000000238418579
		 */
		friction?: number,

		/**
		 * Specifies the time required to destroy the block, in ticks
		 */
		destroytime?: number,

		/**
		 * Specifies render of shadows on the block. Default is 0 (no shadows),
		 * allows float values from 0 to 1
		 */
		translucency?: number,

		/**
		 * Block color when displayed on the vanilla maps
		 */
		mapcolor?: number,

		/**
		 * Block color when displayed on the vanilla maps
		 */
		color_source?: ColorSource,

		/**
		 * Specifies sounds of the block
		 */
		sound?: Sound
	}


	/**
	 * Object used to represent single block variation
	 */
	interface BlockVariation {
		/**
		 * Variation name, displayed as item name everywhere. Default value is
		 * *"Unknown Block"*
		 */
		name?: string,

		/**
		 * Variation textures, array containing pairs of texture name and data.
		 * Texture file should be located in items-opaque folder and its name
		 * should be in the format: *name_data*, e.g. if the file name is 
		 * *ingot_copper_0*, you should specify an array
		 * ```js 
		 * ["ingot_copper", 0]
		 * ```
		 * There should be from one to six texture 
		 * pairs in the array, if less then six variations are specified, the 
		 * last texture is used for missing textures. The sides go in the 
		 * following order:
		 * ```js 
		 * texture: [
		 *   ["название1", индекс1], // bottom (Y: -1)
		 *   ["название2", индекс2], // top (Y: +1)
		 *   ["название3", индекс3], // back (X: -1)
		 *   ["название4", индекс4], // front (X: +1)
		 *   ["название5", индекс5], // left (Z: -1)
		 *   ["название6", индекс6]  // right (Z: +1)
		 * ]
		 * ```
		 */
		texture: [string, number][]

		/**
		 * If true, block variation will be added to creative inventory
		 */
		inCreative?: boolean,
	}

	/**
	 * Function used to determine block drop
	 * @param blockCoords coordinates where the block is destroyed and side from
	 * where it is destroyed
	 * @param blockID numeric tile id
	 * @param blockData block data value
	 * @param diggingLevel level of the tool the block was dug with
	 * @param enchant enchant data of the tool held in player's hand
	 * @param item item stack held in player's hand
	 * @param region BlockSource object
	 * @returns block drop, the array of arrays, each containing three or four values: 
	 * id, count, data and extra respectively
	 */
	interface DropFunction {
		(blockCoords: Callback.ItemUseCoordinates, blockID: number, blockData: number, diggingLevel: number, enchant: ToolAPI.EnchantData, item: ItemInstance, region: BlockSource): ItemInstanceArray[]
	}

	interface EntityInsideFunction {
		(blockCoords: Vector, block: Tile, entity: number): void
	}

	/**
	 * Function used to determine when block is broken by
	 * environment (explosions, pistons, etc.)
	 * @param blockCoords coordinates where the block is destroyed and side from
	 * where it is destroyed
	 * @param block information about block that is broken
	 * @param region BlockSource object
	 */
	interface PopResourcesFunction {
		(blockCoords: Vector, block: Tile, region: BlockSource): void
	}


	/**
	 * Function used to determine when block is placed in the world
	 * @param coords set of all coordinate values that can be useful to write 
	 * custom use logics
	 * @param item item that was in the player's hand when he touched the block
	 * @param block block that was touched
	 * @param player Player unique id
	 * @param region BlockSource object
	 * @returns coordinates where to actually place the block, or void for 
	 * default placement
	 */
	interface PlaceFunction {
		(coords: Callback.ItemUseCoordinates, item: ItemInstance, block: Tile, player: number, region: BlockSource): Vector | void
	}


	/**
	 * Function used to track random block ticks
	 * @param x x coordinate of the block that ticked
	 * @param y y coordinate of the block that ticked
	 * @param z z coordinate of the block that ticked
	 * @param id block id
	 * @param data block data
	 * @param region BlockSource object
	 */
	interface RandomTickFunction {
		(x: number, y: number, z: number, id: number, data: number, region: BlockSource): void
	}


	/**
	 * Function used to track random block animation ticks
	 * @param x x coordinate of the block that should be updated
	 * @param y y coordinate of the block that should be updated
	 * @param z z coordinate of the block that should be updated
	 * @param id block id
	 * @param data block data
	 */
	interface AnimateTickFunction {
		(x: number, y: number, z: number, id: number, data: number): void
	}

	/**
	 * Function used to check block's neighbours changes
	 * @param coords coords vector of the block
	 * @param block Tile object of the block
	 * @param changedCoords coords vector of the neighbour block that was changed
	 * @param region BlockSource object
	 */
	interface NeighbourChangeFunction {
		(coords: Vector, block: Tile, changedCoords: Vector, region: BlockSource): void
	}
        /**
         * @returns drop function of the block with given numeric id
         */
        function getDropFunction(id: number): Block.DropFunction;
}
