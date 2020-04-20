package com.nathanblaubach.dao

import org.jetbrains.exposed.dao.id.IntIdTable

object Recipes : IntIdTable() {
    val name = varchar("name", length = 400).nullable()
}
