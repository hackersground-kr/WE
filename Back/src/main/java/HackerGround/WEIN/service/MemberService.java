package HackerGround.WEIN.service;

import HackerGround.WEIN.dto.member.MemberModifyResponse;
import HackerGround.WEIN.dto.member.MemberRequest;
import HackerGround.WEIN.domain.member.Member;
import HackerGround.WEIN.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    public Optional<Member> findById(Long id) {
        return memberRepository.findById(id);
    }

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

    public void save_Temp() {
        Member member=new Member("1","2","3",123L);
        memberRepository.save(member);
    }

    public Member update(Long id, MemberModifyResponse memberUpdateResponse) {
        Member member = findById(id).get();
        return member.update(memberUpdateResponse);
    }


    public void delete(Member member) {
        memberRepository.delete(member);
    }



}
