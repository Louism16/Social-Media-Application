package edu.lehigh.cse216.lom225.backend;

import java.util.Date;

/**
 * DataRow holds a row of information.  A row of information consists of
 * an identifier, strings for a "title" and "content", and a creation date.
 * 
 * Because we will ultimately be converting instances of this object into JSON
 * directly, we need to make the fields public.  That being the case, we will
 * not bother with having getters and setters... instead, we will allow code to
 * interact with the fields directly.
 */
public class DataRow {
    /**
     * The unique identifier associated with this element.  It's final, because
     * we never want to change it.
     */
    public final int Post_ID;

    /**
     * The title for this row of data
     */
    //public String mTitle;
    /**
    * The number of Likes for this post
    */
    public int mLikes;

    /**
     * The content for this row of data
     */
    public String mMessage;

    /**
     * The creation date for this row of data.  Once it is set, it cannot be 
     * changed
     */
    public final Date mCreated;

    /**
     * Create a new DataRow with the provided id and title/content, and a 
     * creation date based on the system clock at the time the constructor was
     * called
     * 
     * @param id The id to associate with this row.  Assumed to be unique 
     *           throughout the whole program.
     * 
     * @param title The title string for this row of data
     * 
     * @param content The content string for this row of data
     */
    DataRow(int post_ID, int likes, String message) {
        Post_ID = post_ID;
        mLikes = likes;
        mMessage = message;
        mCreated = new Date();
    }

    /**
     * Copy constructor to create one datarow from another
     */
    DataRow(DataRow data) {
        Post_ID = data.Post_ID;
        // NB: Strings and Dates are immutable, so copy-by-reference is safe
        mLikes = data.mLikes;
        mMessage = data.mMessage;
        mCreated = data.mCreated;
    }
}