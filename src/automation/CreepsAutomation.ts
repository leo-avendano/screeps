export class CreepsAutomation {
  run() {
    for (var name in Game.creeps) {
      const creep = Game.creeps[name];
      // if (creep.memory.role == 'harvester') {
      //   roleHarvester.run(creep);
      // }
      // if (creep.memory.role == 'upgrader') {
      //   roleUpgrader.run(creep);
      // }
      // if (creep.memory.role == 'builder') {
      //   roleBuilder.run(creep);
      // }
    }

  }
}
