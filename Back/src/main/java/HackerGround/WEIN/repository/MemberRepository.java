package HackerGround.WEIN.repository;

import HackerGround.WEIN.domain.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member,Long> {

    Member findMemberByToken(String token);
}
