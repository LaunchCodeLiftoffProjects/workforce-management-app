package org.launchcode.workforce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TimeStampRepository extends JpaRepository<TimeStamp, Long> {
    List<TimeStamp> findByClientId(Long clientId);
}
