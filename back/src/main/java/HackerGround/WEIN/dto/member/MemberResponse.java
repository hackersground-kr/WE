package HackerGround.WEIN.dto.member;

import HackerGround.WEIN.domain.member.Member;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.util.Optional;

@Data
public class MemberResponse {

    @NotBlank(message = "Name is Essential")
    private String userName;
    @NotBlank(message = "ID is Essential")
    private String loginId;
    @NotBlank(message = "Password is Essential")
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
