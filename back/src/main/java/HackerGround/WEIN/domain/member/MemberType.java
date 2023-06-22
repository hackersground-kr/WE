package HackerGround.WEIN.domain.member;

import com.fasterxml.jackson.annotation.JsonCreator;

public enum MemberType {
    MAN,WOMAN;

    @JsonCreator
    public static MemberType from(String s) {
        return MemberType.valueOf(s.toUpperCase());
    }
}
