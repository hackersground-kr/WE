package HackerGround.WEIN.dto.member;

import HackerGround.WEIN.domain.member.Member;
import HackerGround.WEIN.domain.member.MemberType;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class MemberRequest {

    @NotBlank
    private String userName;
    @NotBlank
    private String loginId;
    @NotBlank
    private String password;

    private Integer birth;
    @NotBlank
    private String status;

    public Member to_Entity() {

        return Member.builder()
                .userName(userName)
                .loginId(loginId)
                .passWord(password)
                .birth(birth)
                .memberType(MemberType.from(status))
                .build();

    }
}
