package HackerGround.WEIN.domain.member;


import HackerGround.WEIN.dto.member.MemberModifyRequest;
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
    private Integer birth;

    @Enumerated(EnumType.STRING)
    private MemberType memberType;


    @Builder
    public Member(String userName, String loginId, String passWord, Integer birth,MemberType memberType) {
        this.userName = userName;
        this.loginId = loginId;
        this.passWord = passWord;
        this.birth = birth;
        System.out.println(memberType);
        this.memberType=memberType;
        this.token= UUID.randomUUID().toString();
    }

    public void update(MemberModifyRequest member) {
        this.userName = member.getUserName();
        this.loginId = member.getLoginId();
        this.passWord=member.getPassword();
        this.birth=member.getBirth();
    }
}
