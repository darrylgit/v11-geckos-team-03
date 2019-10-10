import React from "react";
import { connect } from "react-redux";
import { checklistCheck } from "../../../../actions";

function ChecklistItem(props) {
  function checkItem() {
    props.checklistCheck(props.cardId, props.checklistItemId);
  }

  if (!props.checked) {
    return (
      <div className="item">
        <div
          className="item__checkbox item__checkbox--unchecked"
          onClick={checkItem}
        ></div>
        <div className="item__title">{props.checklistItemTitle}</div>
      </div>
    );
  } else {
    return (
      <div className="item">
        <div
          className="item__checkbox item__checkbox--checked"
          onClick={checkItem}
        >
          <div className="checkmark">&#10004;</div>
        </div>
        <div className="item__title">{props.checklistItemTitle}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { checklistItemId, cardId } = ownProps;
  let card = state.cards.filter(card => card.cardId === cardId)[0];
  let checked = card.checklist.filter(
    item => item.checklistItemId === checklistItemId
  )[0].checked;

  return { checked };
};

export default connect(
  mapStateToProps,
  { checklistCheck }
)(ChecklistItem);
