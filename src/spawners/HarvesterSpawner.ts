export class HarvesterSpawner {
  run(harvesters: any) {
    if (harvesters.length < 2) {
      var newName = 'Harvester' + Game.time;
      console.log('Spawning new harvester: ' + newName);
      Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName,
        { memory: { role: 'harvester' } });
    }

    if (Game.spawns['Spawn1'].spawning) {
      var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
      Game.spawns['Spawn1'].room.visual.text(
        '🛠️' + spawningCreep.memory.role,
        Game.spawns['Spawn1'].pos.x + 1,
        Game.spawns['Spawn1'].pos.y,
        { align: 'left', opacity: 0.8 });
    }
  }
}
