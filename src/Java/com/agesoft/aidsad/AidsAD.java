package com.agesoft.aidsad;
import java.util.Random;

/**
 * Java AidsAD Class
 * */
public class AidsAD {

    public AidsAD(){};
    public AidsAD(Catagories cata){
        m_cata = cata;
    }
    /**
     * Catagories
     * */
    public enum Catagories {
        TESTING,
        RANDOMIZED
    }

    private Catagories m_cata;

    private String[] TestingBench = {
        "Test1", "Test2", "Test3", "Test4", "Test5"
    };

    private String[] RandomizedADS = {
            "AidsAD is now on Java Applications Too!",
            "Here could be your AD",
            "The better Java 1.8 is now here upgrade it now to Java 1.8!!",
            "Agesoft's newest Technology AidsAD | So Flexible and avaible in 3 coding languages!",
            "Get AidsAD Now at https://github.com/AgesoftOSS/AidsAD"
    };

    /**
     * Creates a string ad.
     * */
    public String createStringAD(Catagories catagory){
        String out = "";
        switch (catagory){
            case TESTING:
                 out = TestingBench[generateRandomIndex(TestingBench.length)];
            case RANDOMIZED:
                out = RandomizedADS[generateRandomIndex(RandomizedADS.length)];
        }
        return out;
    }

    private int generateRandomIndex(int max){
        Random r = new Random(System.currentTimeMillis());
        int out = r.nextInt(max);
        return out;
    }
}
