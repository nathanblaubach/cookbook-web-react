package com.nathanblaubach.dao

import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID

class Recipe(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<Recipe>(Recipes)

    var name by Recipes.name
    val ingredients by Ingredient referrersOn Ingredients.recipe
    val instructions by Instruction referrersOn Instructions.recipe
    val tags by Tag referrersOn Tags.recipe
}
