package HackerGround.WEIN.dto.member;

import HackerGround.WEIN.domain.member.Member;
import lombok.Data;

@Data
public class MemberRequest {

    private String userName;
    private String loginId;
    private String password;
    private Long birth;
    private boolean gender;

    public Member to_Entity() {
        return Member.builder()
                .userName(userName)
                .loginId(loginId)
                .passWord(password)
                .birth(birth)
                .build();

    }
}
