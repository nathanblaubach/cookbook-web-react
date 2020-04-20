package com.nathanblaubach.dao

import org.jetbrains.exposed.dao.id.IntIdTable

object Instructions : IntIdTable() {
    val name = varchar("name", length = 400).nullable()
    val recipe = reference("recipe", Recipes)
}
