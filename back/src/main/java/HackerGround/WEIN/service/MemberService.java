package HackerGround.WEIN.service;

import HackerGround.WEIN.dto.member.MemberModifyRequest;
import HackerGround.WEIN.dto.member.MemberRequest;
import HackerGround.WEIN.domain.member.Member;
import HackerGround.WEIN.repository.BoardRepository;
import HackerGround.WEIN.repository.MemberRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final BoardRepository boardRepository;

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

    @Transactional
    public void update(MemberModifyRequest request) {
        Member findMember = memberRepository.findMemberByToken(request.getToken());
        findMember.update(request.getUserName(),
                request.getLoginId(),
                request.getPassword(),
                request.getBirth());
    }


    public void delete(Member member) {
        boardRepository.deleteAllByMember(member);
        memberRepository.delete(member);
    }



}
