package com.example.donation1.repository;

import java.util.List;
// import java.util.Optional;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.donation1.model.Story;
import com.example.donation1.model.User;

@Repository
public interface StoryRepository extends JpaRepository<Story, Integer> {

    Optional<Story> findById(Long id);

    @Query("select s from Story s order by s.amount")
    List<Story> findAllByOrderByAmount();

    List<Story> findByUserId(Long userId);

    List<Story> findByUser(User user);

    void deleteById(Long storyId);

}
