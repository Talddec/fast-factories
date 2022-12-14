Events.on(ClientLoadEvent, b  => {
Blocks.graphitePress.craftTime = 1;
Blocks.graphitePress.outputItem = ItemStack(Items.graphite, 5);
Blocks.multiPress.outputItem = ItemStack(Items.graphite, 10);
Blocks.multiPress.craftTime = 1;
Blocks.siliconSmelter.craftTime = 1;
Blocks.siliconSmelter.consumes.items(ItemStack.with(Items.coal, 1, Items.sand, 1));
Blocks.siliconCrucible.craftTime = 1;
Blocks.siliconCrucible.consumes.items(ItemStack.with(Items.coal, 1, Items.sand, 1, Items.pyratite, 1));
Blocks.kiln.craftTime = 1;
Blocks.plastaniumCompressor.craftTime=1;
Blocks.plastaniumCompressor.consumes.liquid(Liquids.oil, 0.1);
Blocks.phaseWeaver.craftTime = 1;
Blocks.phaseWeaver.consumes.items(ItemStack.with(Items.thorium, 1, Items.sand, 1));
Blocks.surgeSmelter.craftTime = 1;
Blocks.surgeSmelter.consumes.items(ItemStack.with(Items.copper, 1, Items.lead, 1, Items.titanium, 1, Items.silicon, 1));
Blocks.cryofluidMixer.craftTime = 1;
Blocks.cryofluidMixer.consumes.liquid(Liquids.water, 0.01);
Blocks.pyratiteMixer.consumes.items(ItemStack.with(Items.coal, 1, Items.lead, 1, Items.sand, 1));
Blocks.separator.craftTime=1;
Blocks.separator.consumes.liquid(Liquids.slag, 2 / 30);
Blocks.disassembler. consumes.liquid(Liquids.slag, 0.1);
Blocks.sporePress.outputLiquid = new LiquidStack(Liquids.oil, 100);
Blocks.pulverizer.outputItem = new ItemStack(Items.sand, 5);
Blocks.coalCentrifuge.craftTime=1;
});
