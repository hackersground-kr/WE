package HackerGround.WEIN.domain.member;


import HackerGround.WEIN.api.dto.member.MemberModifyResponse;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MEMBER_ID")
    private Long id;

    private String token;
    private String userName;
    private String loginId;
    private String passWord;
    private Long birth;
    private boolean gender;

    @Builder
    public Member(String userName, String loginId, String passWord, Long birth) {
        this.userName = userName;
        this.loginId = loginId;
        this.passWord = passWord;
        this.birth = birth;
        this.token= UUID.randomUUID().toString();
    }

    public Member update(MemberModifyResponse member) {
        this.userName = member.getUserName();
        this.loginId = member.getLoginId();
        this.passWord=member.getPassword();
        this.birth=member.getBirth();
        return this;
    }
}
