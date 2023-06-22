package HackerGround.WEIN.dto.member;

import HackerGround.WEIN.domain.member.Member;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.util.Optional;

@Data
public class MemberResponse {

    private String userName;
    private String loginId;
    private String password;
    private Integer birth;
    private String gender;

    public MemberResponse(Member member) {
        this.userName = member.getUserName();
        this.loginId = member.getLoginId();
        this.password = member.getPassWord();
        this.birth = member.getBirth();
        this.gender=member.getMemberType().toString();
    }

    public static MemberResponse toDto(Member member) {
        return new MemberResponse(member);
    }
}
