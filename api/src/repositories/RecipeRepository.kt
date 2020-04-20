package com.nathanblaubach.repositories

import com.nathanblaubach.dao.*
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.transactions.transaction

class RecipeRepository(private val database: Database) {
    fun init() = transaction (database) {
        SchemaUtils.create (
            Recipes,
            Ingredients,
            Instructions,
            Tags
        )
    }

    fun create(recipeName: String, ingredientNames: List<String>, instructionNames: List<String>, tagNames: List<String>) = transaction (database) {
        val newRecipe = Recipe.new {
            this.name = recipeName
        }

        ingredientNames.forEach { ingredientName ->
            Ingredient.new {
                name = ingredientName
                recipe = newRecipe
            }
        }

        instructionNames.forEach { instructionName ->
            Instruction.new {
                this.name = instructionName
                this.recipe = newRecipe
            }
        }

        tagNames.forEach { tagName ->
            Tag.new {
                this.name = tagName
                this.recipe = newRecipe
            }
        }
    }

    fun read(recipeId: Int) = transaction (database) {
        val recipe = Recipe.findById(recipeId)
        mapOf(
            "name" to recipe?.name,
            "ingredients" to recipe?.ingredients?.map { ingredient -> ingredient.name },
            "instructions" to recipe?.instructions?.map { instruction -> instruction.name },
            "tags" to recipe?.tags?.map { tag -> tag.name }
        )
    }

    fun read() = transaction (database) {
        Recipe.all().map{ recipe ->
            mapOf(
                "name" to recipe.name,
                "ingredients" to recipe.ingredients.map { ingredient -> ingredient.name },
                "instructions" to recipe.instructions.map { instruction -> instruction.name },
                "tags" to recipe.tags.map { tag -> tag.name }
            )
        }
    }
}