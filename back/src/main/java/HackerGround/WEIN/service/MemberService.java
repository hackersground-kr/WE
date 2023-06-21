package HackerGround.WEIN.service;

import HackerGround.WEIN.dto.member.MemberRequest;
import HackerGround.WEIN.domain.member.Member;
import HackerGround.WEIN.repository.BoardRepository;
import HackerGround.WEIN.repository.MemberRepository;
import HackerGround.WEIN.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final BoardRepository boardRepository;
    private final ReviewRepository reviewRepository;

    public Member findByToken(String token) {
        return memberRepository.findMemberByToken(token);
    }


    public List<Member> findAll() {
        return memberRepository.findAll();
    }

    public Member save(MemberRequest memberRequest) {
        Member member = memberRequest.to_Entity();
        memberRepository.save(member);
        return member;
    }

//    public Member update(Long id, MemberModifyResponse memberUpdateResponse) {
////        Member member = findById(id).get();
//        return member.update(memberUpdateResponse);
//    }


    public void delete(Member member) {
        boardRepository.deleteAllByMember(member);
        memberRepository.delete(member);
    }



}
