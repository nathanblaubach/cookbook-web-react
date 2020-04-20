package com.nathanblaubach.dao

import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID

class Instruction(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<Instruction>(Instructions)

    var name by Instructions.name
    var recipe by Recipe referencedOn Instructions.recipe
}
