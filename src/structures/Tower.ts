var tower = Game.getObjectById('66944ef9bfd76e05f4d48cc8');
if (tower) {
  var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
    filter: (structure) => structure.hits < structure.hitsMax
  });
  if (closestDamagedStructure) {
    tower.repair(closestDamagedStructure);
  }

  var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
  if (closestHostile) {
    tower.attack(closestHostile);
  }
}
