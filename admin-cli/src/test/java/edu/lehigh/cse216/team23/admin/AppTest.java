package edu.lehigh.cse216.team23.admin;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;
import java.io.ByteArrayInputStream;
import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.io.InputStreamReader;
import java.io.IOException;


/**
 * Unit test for simple App.
 */
public class AppTest extends TestCase
{
    /**
     * Create the test case
     *
     * @param testName name of the test case
     */
    public AppTest( String testName )
    {
        super( testName );
    }

    /**
     * @return the suite of tests being tested
     */
    public static Test suite()
    {
        return new TestSuite( AppTest.class );
    }

    /**
     * Rigourous Test :-)
     */
    /*public void testApp()
    {
        assertTrue( true );
    }*/
    public void testValidAction() {
        String input = "T\n"; // Simulate the user input
    
        ByteArrayInputStream inputStream = new ByteArrayInputStream(input.getBytes());
        try {
            System.setIn(inputStream); // Set the input stream
            char action = App.prompt(new BufferedReader(new InputStreamReader(System.in)));
            assertEquals('T', action);
        } finally {
            try {
                inputStream.close();
            } catch (IOException e) {
                // Handle the exception if necessary
            }
        }
    }
    public void testInvalidAction() {
        String input = "Z\nT\n"; // Simulate invalid input first, then valid input
    
        ByteArrayInputStream inputStream = new ByteArrayInputStream(input.getBytes());
        ByteArrayOutputStream outContent = new ByteArrayOutputStream();
        try {
            System.setIn(inputStream); // Set the input stream
            System.setOut(new PrintStream(outContent));
            char action = App.prompt(new BufferedReader(new InputStreamReader(System.in)));
    
            // Checking if input is invalid
            assertTrue(outContent.toString().contains("Invalid Command"));
            assertEquals('T', action);
        } finally {
            try {
                inputStream.close();
            } catch (IOException e) {
                // Handle the exception if necessary
            }
        }
    }
}