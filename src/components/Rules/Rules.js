import React, { useEffect } from "react";
import styles from "./Rules.module.scss";
import RulesImg from "../../assets/images/rules.png";
import { NavLink } from "react-router-dom";
import { gsap, TweenLite, Elastic } from "gsap";

const Rules = () => {
  useEffect(() => {
    TweenLite.from(`.${styles.image}`, 2, {
      delay: 0.5,
      y: -250,
      ease: Elastic.easeOut,
    });
    gsap.fromTo(
      `.${styles.Info}`,
      {
        x: -300,
        opacity: 0,
        duration: 1,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
      }
    );
  }, []);

  return (
    <div className={styles.wrapper}>
      <img className={styles.image} alt="logo" src={RulesImg} />
      <div className={styles.Info}>
        <h2>RULES</h2>
        <h4>
          With the exception of Poker, Blackjack is the most popular gambling
          card game.
        </h4>
        <br />
        <p>
          Players are each dealt two cards, face up or down depending on the
          casino and the table. In the U.S., the dealer is also dealt two cards,
          normally one up (exposed) and one down (hidden). In most other
          countries, the dealer only receives one card face up. The value of
          cards two through ten is their pip value (2 through 10). Face cards
          (Jack, Queen, and King) are all worth ten. Aces can be worth one or
          eleven. A hand's value is the sum of the card values. Players are
          allowed to draw additional cards to improve their hands. A hand with
          an ace valued as 11 is called "soft", meaning that the hand will not
          bust by taking an additional card. The value of the ace will become
          one to prevent the hand from exceeding 21. Otherwise, the hand is
          called "hard".
        </p>
        <br />
        <p>
          Once all the players have completed their hands, it is the dealer's
          turn. The dealer hand will not be completed if all players have either
          busted or received blackjacks. The dealer then reveals the hidden card
          and must hit until the cards total up to 17 points. At 17 points or
          higher the dealer must stay. (At most tables the dealer also hits on a
          "soft" 17, i.e. a hand containing an ace and one or more other cards
          totaling six.) You are betting that you have a better hand than the
          dealer. The better hand is the hand where the sum of the card values
          is closer to 21 without exceeding 21. The detailed outcome of the hand
          follows:
        </p>
        <br />
        <ul>
          <li>
            If the player is dealt an Ace and a ten-value card (called a
            "blackjack" or "natural"), and the dealer does not, the player wins
            and usually receives a bonus.
          </li>
          <li>
            If the player exceeds a sum of 21 ("busts"); the player loses, even
            if the dealer also exceeds 21.
          </li>
          <li>
            If the dealer exceeds 21 ("busts") and the player does not; the
            player wins.
          </li>
          <li>
            If the player attains a final sum higher than the dealer and does
            not bust; the player wins.
          </li>
          <li>
            If both dealer and player receive a blackjack or any other hands
            with the same sum called a "push", no one wins.
          </li>
        </ul>
        <br />
        <a
          href="https://github.com/BrascoBG/Black-Jack"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to see the code
        </a>
        <br />
        <NavLink to="/">
          <button>&larr; BACK</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Rules;
