import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class PasswordValidatorTest {

    private final PasswordValidator validator = new PasswordValidator();

    @Test
    public void testValidPassword() {
        assertTrue(validator.isValidPassword("Aa123456!"));
    }

    @Test
    public void testPasswordIsNull() {
        assertFalse(validator.isValidPassword(null));
    }

    @Test
    public void testPasswordTooShort() {
        assertFalse(validator.isValidPassword("Aa12!"));
    }

    @Test
    public void testPasswordWithoutUpperCase() {
        assertFalse(validator.isValidPassword("aa123456!"));
    }

    @Test
    public void testPasswordWithoutLowerCase() {
        assertFalse(validator.isValidPassword("AA123456!"));
    }

    @Test
    public void testPasswordWithoutDigit() {
        assertFalse(validator.isValidPassword("Aabcdefg!"));
    }

    @Test
    public void testPasswordWithoutSpecialChar() {
        assertFalse(validator.isValidPassword("Aa123456"));
    }

    @Test
    public void testBoundaryLengthPassword() {
        assertTrue(validator.isValidPassword("Aa12345!"));
    }
}