package edu.lehigh.cse216.lom225.backend;

/**
 * DataRowLite is for communicating back a subset of the information in a
 * DataRow.  Specifically, we only send back the id and title.  Note that
 * in order to keep the client code as consistent as possible, we ensure 
 * that the field names in DataRowLite match the corresponding names in
 * DataRow.  As with DataRow, we plan to convert DataRowLite objects to
 * JSON, so we need to make their fields public.
 */
public class DataRowLite {
    /**
     * The id for this row; see DataRow.Post_ID
     */
    public int Post_ID;

    /**
     * The title string for this row of data; see DataRow.mMessage
     */
    public String mMessage;

    public int mLikes;

    /**
     * Create a DataRowLite by copying fields from a DataRow
     */
    public DataRowLite(DataRow data) {
        this.Post_ID = data.Post_ID;
        this.mMessage = data.mMessage;
        this.mLikes = data.mLikes;
    }
    /**
    * Create a DataRowLite with the provided attributes
    */
    public DataRowLite(int post_ID, int likes, String message) {
        this.Post_ID = post_ID;
        this.mLikes = likes;
        this.mMessage = message;
    }
}