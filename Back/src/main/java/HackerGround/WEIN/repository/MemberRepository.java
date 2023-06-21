package HackerGround.WEIN.repository;

import HackerGround.WEIN.domain.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member,Long> {

    Member findMemberByToken(String token);
    Member findMemberById(Long id);

    void delete(Optional<Member> member);
}
