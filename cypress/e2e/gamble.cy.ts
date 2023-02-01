const completeGamble = (gambleClick: () => void) => {
  for (let i = 0; i < 10; i++) {
    gambleClick();
  }
};

describe('gamble', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('다시 뽑기', () => {
    completeGamble(() => cy.contains('강화').click());
    cy.contains('다시 뽑기').click();
    cy.contains('취소').click();
    cy.wait(500);
    cy.contains('다시 뽑기').click();
    cy.contains('확인').click();
  });

  it('결과 확인하기', () => {
    completeGamble(() => cy.get(':nth-child(1) > .css-1ggmmzy').click());
    cy.wait(100);
    completeGamble(() => cy.get(':nth-child(2) > .css-1ggmmzy').click());
    cy.wait(100);
    completeGamble(() => cy.get(':nth-child(3) > .css-1ggmmzy').click());
    cy.wait(2000);
  });
});

export {};
