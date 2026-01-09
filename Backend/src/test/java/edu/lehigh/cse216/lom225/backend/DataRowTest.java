package edu.lehigh.cse216.lom225.backend;


import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;


/**
* Unit test for simple App.
*/
public class DataRowTest extends TestCase {
    /**
    * Create the test case
    *
    * @param testName name of the test case
    */
    public DataRowTest(String testName) {
        super(testName);
    }


    /**
    * @return the suite of tests being tested
    */
    public static Test suite() {
        return new TestSuite(DataRowTest.class);
    }


    /**
    * Ensure that the constructor populates every field of the object it
    * creates
    */
    public void testConstructor() {
        int id = 17;
        int likes = 100;
        String message = "Test Message";
        DataRow d = new DataRow(id, likes, message);


        assertTrue(d.mMessage.equals(message));
        assertTrue(d.mLikes == likes);
        assertTrue(d.Post_ID == id);
        assertFalse(d.mCreated == null);
    }


    /**
    * Ensure that the copy constructor works correctly
    */
    public void testCopyconstructor() {
        int id = 177;
        int likes = 200;
        String message = "Test Message For Copy";
        DataRow d = new DataRow(id, likes, message);
        DataRow d2 = new DataRow(d);
        assertTrue(d2.mMessage.equals(d.mMessage));
        assertTrue(d2.mLikes == d.mLikes);
        assertTrue(d2.Post_ID == d.Post_ID);
        assertTrue(d2.mCreated.equals(d.mCreated));
    }
}
