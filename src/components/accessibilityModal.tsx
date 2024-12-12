import { useState } from "react";

function AccessibilityModal() {
  return (
    <div className="accessibilityModalWrapper outsideOverlay">
      <div className="accessibilityModal" className="{ XL: xlWidget }">
        <h1>Accessibility options</h1>
        <div className="accessibilityOptions">
          <div className="accessibilityProfiles">
            <div className="profilesButton">
              <span className="profilesButtonIcons">
                <img
                  src={
                    require("../assets/images/accessibility/profiles/profiles.svg")
                      .default
                  }
                  alt="logo"
                />
              </span>

              <span>Accessibility profiles</span>
              <span className="profilesButtonIcons arrow">
                <img
                  src={require("../assets/images/arrowOpen.svg").default}
                  alt="logo"
                />
                <img
                  src={
                    require("../assets/images/accessibility/profiles/profiles.svg")
                      .default
                  }
                  alt="logo"
                />
              </span>

              <div
                className="tooltip"
                data-text="Choose among the predefined sets of accessibility features that are
            common for users."
              >
                <img
                  src={
                    require("../assets/images/accessibility/info.svg").default
                  }
                  alt="logo"
                />
              </div>
            </div>
            <div v-show="!profilesClosed" className="accessibilityProfilesList">
              <button>
                <span v-show="profileDyslexia" className="selectedIcon">
                  <img
                    src={
                      require("../assets/images/accessibility/selected.svg")
                        .default
                    }
                    alt="logo"
                  />
                </span>
                <span className="profilesOptionsIcon">
                  <img
                    src={
                      require("../assets/images/accessibility/profiles/blind.svg")
                        .default
                    }
                    alt="logo"
                  />
                </span>
                <span>Dyslexia</span>
              </button>
              <button>
                <span v-show="profileLowVision" className="selectedIcon">
                  <img
                    src={
                      require("../assets/images/accessibility/selected.svg")
                        .default
                    }
                    alt="logo"
                  />
                </span>
                <span className="profilesOptionsIcon">
                  <img
                    src={
                      require("../assets/images/accessibility/profiles/blind.svg")
                        .default
                    }
                    alt="logo"
                  />
                </span>
                <span>Low vision</span>
              </button>
              <button>
                <span v-show="profileLearning" className="selectedIcon">
                  <img
                    src={
                      require("../assets/images/accessibility/selected.svg")
                        .default
                    }
                    alt="logo"
                  />
                </span>
                <span className="profilesOptionsIcon">
                  <img
                    src={
                      require("../assets/images/accessibility/profiles/blind.svg")
                        .default
                    }
                    alt="logo"
                  />
                </span>
                <span>Learning</span>
              </button>
              <button>
                <span v-show="profileAdhd" className="selectedIcon">
                  <img
                    src={
                      require("../assets/images/accessibility/selected.svg")
                        .default
                    }
                    alt="logo"
                  />
                </span>
                <span className="profilesOptionsIcon">
                  <img
                    src={
                      require("../assets/images/accessibility/profiles/blind.svg")
                        .default
                    }
                    alt="logo"
                  />
                </span>
                <span>ADHD</span>
              </button>
              <button>
                <span v-show="profileSeizure" className="selectedIcon">
                  <img
                    src={
                      require("../assets/images/accessibility/selected.svg")
                        .default
                    }
                    alt="logo"
                  />
                </span>
                <span className="profilesOptionsIcon">
                  <img
                    src={
                      require("../assets/images/accessibility/profiles/blind.svg")
                        .default
                    }
                    alt="logo"
                  />
                </span>
                <span>Seizure & Epileptic</span>
              </button>
            </div>
          </div>
          <div className="accessibilityOversizeWidget">
            <div className="accessibilityOversizeWidgetIcon">
              <img
                src={
                  require("../assets/images/accessibility/oversize.svg").default
                }
                alt="logo"
              />
            </div>

            <span>Oversized Widget</span>
            <label className="switchXLWidgetButton">
              <input type="checkbox" />
              <div></div>
            </label>
          </div>
          <div className="accessibilityButtons">
            <button>
              <span v-show="contrast" className="selectedIcon">
                <img
                  src={
                    require("../assets/images/accessibility/selected.svg")
                      .default
                  }
                  alt="logo"
                />
              </span>
              <span className="mainAccOptionsIcon">
                <img
                  src={
                    require("../assets/images/accessibility/buttons/highContrast.svg")
                      .default
                  }
                  alt="logo"
                />
              </span>
              <span>Alto contrasto</span>
            </button>
            <button>
              <span v-show="biggerText" className="selectedIcon">
                <img
                  src={
                    require("../assets/images/accessibility/selected.svg")
                      .default
                  }
                  alt="logo"
                />
              </span>
              <span className="mainAccOptionsIcon">
                <img
                  src={
                    require("../assets/images/accessibility/buttons/biggerText.svg")
                      .default
                  }
                  alt="logo"
                />
              </span>
              <span>Bigger Text</span>
            </button>
            <button>
              <span v-show="textSpacing" className="selectedIcon">
                <img
                  src={
                    require("../assets/images/accessibility/selected.svg")
                      .default
                  }
                  alt="logo"
                />
              </span>
              <span className="mainAccOptionsIcon">
                <img
                  src={
                    require("../assets/images/accessibility/buttons/textSpacing.svg")
                      .default
                  }
                  alt="logo"
                />
              </span>
              <span>Text Spacing</span>
            </button>
            <button className="dyslexia-friendly">
              <span v-show="dyslexiaFriendly" className="selectedIcon">
                <img
                  src={
                    require("../assets/images/accessibility/selected.svg")
                      .default
                  }
                  alt="logo"
                />
              </span>
              <span className="mainAccOptionsIcon">
                <img
                  src={
                    require("../assets/images/accessibility/buttons/dyslexiaFriendly.svg")
                      .default
                  }
                  alt="logo"
                />
              </span>
              <span>Dyslexia Friendly</span>
            </button>
            <button>
              <span v-show="lineHeight" className="selectedIcon">
                <img
                  src={
                    require("../assets/images/accessibility/selected.svg")
                      .default
                  }
                  alt="logo"
                />
              </span>
              <span className="mainAccOptionsIcon">
                <img
                  src={
                    require("../assets/images/accessibility/buttons/lineHeight.svg")
                      .default
                  }
                  alt="logo"
                />
              </span>
              <span>Line Height</span>
            </button>
            <button>
              <span v-show="cursor" className="selectedIcon">
                <img
                  src={
                    require("../assets/images/accessibility/selected.svg")
                      .default
                  }
                  alt="logo"
                />
              </span>
              <span className="mainAccOptionsIcon">
                <img
                  src={
                    require("../assets/images/accessibility/buttons/cursor.svg")
                      .default
                  }
                  alt="logo"
                />
              </span>
              <span>Cursor</span>
            </button>
            <button>
              <span v-show="readingMask" className="selectedIcon">
                <img
                  src={
                    require("../assets/images/accessibility/selected.svg")
                      .default
                  }
                  alt="logo"
                />
              </span>
              <span className="mainAccOptionsIcon">
                <img
                  src={
                    require("../assets/images/accessibility/buttons/readingMask.svg")
                      .default
                  }
                  alt="logo"
                />
              </span>
              <span>Reading Mask</span>
            </button>
            <button>
              <span v-show="readingGuide" className="selectedIcon">
                <img
                  src={
                    require("../assets/images/accessibility/selected.svg")
                      .default
                  }
                  alt="logo"
                />
              </span>
              <span className="mainAccOptionsIcon">
                <img
                  src={
                    require("../assets/images/accessibility/buttons/readingGuide.svg")
                      .default
                  }
                  alt="logo"
                />
              </span>
              <span>Reading Guide</span>
            </button>
          </div>
        </div>
      </div>
      <div className="followcursorTop" />
      <div className="followcursorLeft" />
      <div className="followcursorRight" />
      <div className="maskReadingGuideTop" />
      <div className="maskReadingGuideBottom" />
    </div>
  );
}
export default AccessibilityModal;
