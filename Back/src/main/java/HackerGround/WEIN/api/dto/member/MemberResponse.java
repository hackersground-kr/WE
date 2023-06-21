package HackerGround.WEIN.api.dto.member;

import HackerGround.WEIN.domain.member.Member;
import lombok.Data;

@Data
public class MemberResponse {

    private String userName;
    private String loginId;
    private String password;
    private Long birth;
    private String gender;

    public MemberResponse(Member member) {
        this.userName = member.getUserName();
        this.loginId = member.getLoginId();
        this.password = member.getPassWord();
        this.birth = member.getBirth();

    }

    public static MemberResponse toDto(Member member) {
        return new MemberResponse(member);
    }
}
