package HackerGround.WEIN.service;

import HackerGround.WEIN.api.dto.member.MemberRequest;
import HackerGround.WEIN.domain.member.Member;
import HackerGround.WEIN.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
//    Optional<User> findById(Long id);
//    List<User> findAll();
//    User update(User user);
//    void delete(User user);

    public Member save(MemberRequest memberRequest) {
        Member member = memberRequest.to_Entity();
        memberRepository.save(member);
        return member;
    }


}
