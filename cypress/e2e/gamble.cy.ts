const completeGamble = (gambleClick: () => void) => {
  for (let i = 0; i < 10; i++) {
    gambleClick();
  }
};

describe('gamble', () => {
  it('다시 뽑기', () => {
    cy.visit('http://localhost:3000');

    completeGamble(() => cy.contains('강화').click());
    cy.wait(600);

    cy.contains('다시 뽑기').click();
  });

  it('결과 확인하기', () => {
    cy.visit('http://localhost:3000');

    completeGamble(() => cy.get(':nth-child(1) > .css-1i0retr').click());

    completeGamble(() => cy.get(':nth-child(2) > .css-1i0retr').click());

    completeGamble(() => cy.get(':nth-child(3) > .css-1i0retr').click());
  });
});

export {};
