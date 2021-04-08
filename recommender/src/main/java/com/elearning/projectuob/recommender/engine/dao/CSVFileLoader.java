package com.elearning.projectuob.recommender.engine.dao;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.sql.*;

public class CSVFileLoader {
    private String jdbcURL = "jdbc:mysql://localhost:3306/project_uob";
    private String username = "projectuob";
    private String password = "projectuob";
    private String csvFilePath;

    public void loadUserFile(){
        csvFilePath = "data/user.csv";
        try (Connection connection = DriverManager.getConnection(jdbcURL, username, password)) {
            String sql = "SELECT * FROM user";

            Statement statement = connection.createStatement();

            ResultSet result = statement.executeQuery(sql);

            BufferedWriter fileWriter = new BufferedWriter(new FileWriter(csvFilePath));

            // write header line containing column names

            while (result.next()) {
                String id = result.getString("id");
                String name = result.getString("name");


                String line = String.format("%s,%s",
                        id, name);

                fileWriter.write(line);
                fileWriter.newLine();
            }

            statement.close();
            fileWriter.close();

        } catch (SQLException e) {
            System.out.println("Datababse error:");
            e.printStackTrace();
        } catch (IOException e) {
            System.out.println("File IO error:");
            e.printStackTrace();
        }
    }

    public void loadMovieFile(){
        csvFilePath = "data/movie.csv";
        try (Connection connection = DriverManager.getConnection(jdbcURL, username, password)) {
            String sql = "SELECT * FROM movie";

            Statement statement = connection.createStatement();

            ResultSet result = statement.executeQuery(sql);

            BufferedWriter fileWriter = new BufferedWriter(new FileWriter(csvFilePath));

            // write header line containing column names

            while (result.next()) {
                String id = result.getString("id");
                String name = result.getString("name");


                String line = String.format("%s,%s",
                        id, name);

                fileWriter.write(line);
                fileWriter.newLine();
            }

            statement.close();
            fileWriter.close();

        } catch (SQLException e) {
            System.out.println("Datababse error:");
            e.printStackTrace();
        } catch (IOException e) {
            System.out.println("File IO error:");
            e.printStackTrace();
        }
    }

    public void loadMovieTagFile(){
        csvFilePath = "data/movie-tag.csv";
        try (Connection connection = DriverManager.getConnection(jdbcURL, username, password)) {
            String sql = "SELECT * FROM movie_tag";

            Statement statement = connection.createStatement();

            ResultSet result = statement.executeQuery(sql);

            BufferedWriter fileWriter = new BufferedWriter(new FileWriter(csvFilePath));

            // write header line containing column names

            while (result.next()) {
                String movie_id = result.getString("movie_id");
                String tag = result.getString("tag");


                String line = String.format("%s,%s",
                        movie_id, tag);

                fileWriter.write(line);
                fileWriter.newLine();
            }

            statement.close();
            fileWriter.close();

        } catch (SQLException e) {
            System.out.println("Datababse error:");
            e.printStackTrace();
        } catch (IOException e) {
            System.out.println("File IO error:");
            e.printStackTrace();
        }
    }

    public void loadRatingFile(){
        csvFilePath = "data/rating.csv";
        try (Connection connection = DriverManager.getConnection(jdbcURL, username, password)) {
            String sql = "SELECT * FROM rating";

            Statement statement = connection.createStatement();

            ResultSet result = statement.executeQuery(sql);

            BufferedWriter fileWriter = new BufferedWriter(new FileWriter(csvFilePath));

            // write header line containing column names

            while (result.next()) {
                String user_id = result.getString("user_id");
                String movie_id = result.getString("movie_id");
                String tag = result.getString("rating");


                String line = String.format("%s,%s,%s",
                        user_id, movie_id, tag);

                fileWriter.write(line);
                fileWriter.newLine();
            }

            statement.close();
            fileWriter.close();

        } catch (SQLException e) {
            System.out.println("Datababse error:");
            e.printStackTrace();
        } catch (IOException e) {
            System.out.println("File IO error:");
            e.printStackTrace();
        }
    }
}
