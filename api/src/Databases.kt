package com.nathanblaubach

import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.transactions.transactionManager
import org.sqlite.SQLiteDataSource
import java.nio.file.Path
import java.nio.file.Paths
import java.sql.Connection

interface DbRetriever {
    fun retrieve(): Database
}

class SQLiteDb(private val filePath: String) : DbRetriever {
    override fun retrieve(): Database {
        val dataSource = SQLiteDataSource()
        dataSource.url = "jdbc:sqlite:${Paths.get(filePath).toAbsolutePath()}"
        val dataBase = Database.connect(dataSource)
        dataBase.transactionManager.defaultIsolationLevel = Connection.TRANSACTION_SERIALIZABLE
        return dataBase
    }
}