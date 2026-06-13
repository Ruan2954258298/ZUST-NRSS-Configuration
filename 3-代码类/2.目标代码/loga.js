public class PasswordValidator {

    /**
     * 校验密码复杂度：
     * 1. 长度不少于8位
     * 2. 至少包含一个大写字母
     * 3. 至少包含一个小写字母
     * 4. 至少包含一个数字
     * 5. 至少包含一个特殊字符
     */
    public boolean isValidPassword(String password) {
        if (password == null || password.length() < 8) {
            return false;
        }

        boolean hasUpper = false;
        boolean hasLower = false;
        boolean hasDigit = false;
        boolean hasSpecial = false;

        for (char c : password.toCharArray()) {
            if (Character.isUpperCase(c)) {
                hasUpper = true;
            } else if (Character.isLowerCase(c)) {
                hasLower = true;
            } else if (Character.isDigit(c)) {
                hasDigit = true;
            } else {
                hasSpecial = true;
            }
        }

        return hasUpper && hasLower && hasDigit && hasSpecial;
    }
}