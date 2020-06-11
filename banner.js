const banner = [
  '\x1b[38;2;95;37;250m \x1b[39m\x1b[38;2;71;57;254m \x1b[39m\x1b[38;2;50;79;253m \x1b[39m\x1b[38;2;31;104;247m \x1b[39m\x1b[38;2;17;129;237m_\x1b[39m\x1b[38;2;7;154;222m_\x1b[39m\x1b[38;2;1;178;203m_\x1b[39m\x1b[38;2;1;200;181m_\x1b[39m\x1b[38;2;6;220;157m \x1b[39m\x1b[38;2;15;235;132m \x1b[39m\x1b[38;2;29;246;107m \x1b[39m\x1b[38;2;47;253;82m \x1b[39m\x1b[38;2;68;254;60m \x1b[39m\x1b[38;2;92;251;40m \x1b[39m\x1b[38;2;117;242;23m \x1b[39m\x1b[38;2;142;229;11m \x1b[39m\x1b[38;2;167;212;3m \x1b[39m\x1b[38;2;190;192;1m \x1b[39m\x1b[38;2;211;169;3m \x1b[39m\x1b[38;2;228;144;10m \x1b[39m\x1b[38;2;242;119;22m \x1b[39m\x1b[38;2;250;94;38m \x1b[39m\x1b[38;2;254;70;58m \x1b[39m\x1b[38;2;253;49;81m \x1b[39m\x1b[38;2;247;30;105m \x1b[39m\x1b[38;2;236;16;130m \x1b[39m\x1b[38;2;221;6;156m \x1b[39m\x1b[38;2;202;1;180m \x1b[39m\x1b[38;2;180;1;202m\x1b[39m',
  '\x1b[38;2;71;57;254m \x1b[39m\x1b[38;2;50;79;253m \x1b[39m\x1b[38;2;31;104;247m \x1b[39m\x1b[38;2;17;129;237m/\x1b[39m\x1b[38;2;7;154;222m \x1b[39m\x1b[38;2;1;178;203m_\x1b[39m\x1b[38;2;1;200;181m_\x1b[39m\x1b[38;2;6;220;157m/\x1b[39m\x1b[38;2;15;235;132m_\x1b[39m\x1b[38;2;29;246;107m_\x1b[39m\x1b[38;2;47;253;82m_\x1b[39m\x1b[38;2;68;254;60m_\x1b[39m\x1b[38;2;92;251;40m_\x1b[39m\x1b[38;2;117;242;23m_\x1b[39m\x1b[38;2;142;229;11m_\x1b[39m\x1b[38;2;167;212;3m \x1b[39m\x1b[38;2;190;192;1m \x1b[39m\x1b[38;2;211;169;3m_\x1b[39m\x1b[38;2;228;144;10m_\x1b[39m\x1b[38;2;242;119;22m \x1b[39m\x1b[38;2;250;94;38m \x1b[39m\x1b[38;2;254;70;58m_\x1b[39m\x1b[38;2;253;49;81m_\x1b[39m\x1b[38;2;247;30;105m_\x1b[39m\x1b[38;2;236;16;130m_\x1b[39m\x1b[38;2;221;6;156m_\x1b[39m\x1b[38;2;202;1;180m_\x1b[39m\x1b[38;2;180;1;202m_\x1b[39m\x1b[38;2;156;6;221m\x1b[39m',
  '\x1b[38;2;50;79;253m \x1b[39m\x1b[38;2;31;104;247m \x1b[39m\x1b[38;2;17;129;237m/\x1b[39m\x1b[38;2;7;154;222m \x1b[39m\x1b[38;2;1;178;203m/\x1b[39m\x1b[38;2;1;200;181m_\x1b[39m\x1b[38;2;6;220;157m/\x1b[39m\x1b[38;2;15;235;132m \x1b[39m\x1b[38;2;29;246;107m_\x1b[39m\x1b[38;2;47;253;82m_\x1b[39m\x1b[38;2;68;254;60m_\x1b[39m\x1b[38;2;92;251;40m/\x1b[39m\x1b[38;2;117;242;23m \x1b[39m\x1b[38;2;142;229;11m_\x1b[39m\x1b[38;2;167;212;3m \x1b[39m\x1b[38;2;190;192;1m\\\x1b[39m\x1b[38;2;211;169;3m/\x1b[39m\x1b[38;2;228;144;10m \x1b[39m\x1b[38;2;242;119;22m/\x1b[39m\x1b[38;2;250;94;38m \x1b[39m\x1b[38;2;254;70;58m/\x1b[39m\x1b[38;2;253;49;81m \x1b[39m\x1b[38;2;247;30;105m/\x1b[39m\x1b[38;2;236;16;130m \x1b[39m\x1b[38;2;221;6;156m_\x1b[39m\x1b[38;2;202;1;180m_\x1b[39m\x1b[38;2;180;1;202m_\x1b[39m\x1b[38;2;156;6;221m/\x1b[39m\x1b[38;2;131;16;236m\x1b[39m',
  '\x1b[38;2;31;104;247m \x1b[39m\x1b[38;2;17;129;237m/\x1b[39m\x1b[38;2;7;154;222m \x1b[39m\x1b[38;2;1;178;203m_\x1b[39m\x1b[38;2;1;200;181m_\x1b[39m\x1b[38;2;6;220;157m/\x1b[39m\x1b[38;2;15;235;132m \x1b[39m\x1b[38;2;29;246;107m/\x1b[39m\x1b[38;2;47;253;82m \x1b[39m\x1b[38;2;68;254;60m \x1b[39m\x1b[38;2;92;251;40m/\x1b[39m\x1b[38;2;117;242;23m \x1b[39m\x1b[38;2;142;229;11m \x1b[39m\x1b[38;2;167;212;3m_\x1b[39m\x1b[38;2;190;192;1m_\x1b[39m\x1b[38;2;211;169;3m/\x1b[39m\x1b[38;2;228;144;10m \x1b[39m\x1b[38;2;242;119;22m/\x1b[39m\x1b[38;2;250;94;38m_\x1b[39m\x1b[38;2;254;70;58m/\x1b[39m\x1b[38;2;253;49;81m \x1b[39m\x1b[38;2;247;30;105m/\x1b[39m\x1b[38;2;236;16;130m \x1b[39m\x1b[38;2;221;6;156m/\x1b[39m\x1b[38;2;202;1;180m \x1b[39m\x1b[38;2;180;1;202m \x1b[39m\x1b[38;2;156;6;221m \x1b[39m\x1b[38;2;131;16;236m \x1b[39m\x1b[38;2;105;30;247m\x1b[39m',
  '\x1b[38;2;17;129;237m/\x1b[39m\x1b[38;2;7;154;222m_\x1b[39m\x1b[38;2;1;178;203m/\x1b[39m\x1b[38;2;1;200;181m \x1b[39m\x1b[38;2;6;220;157m/\x1b[39m\x1b[38;2;15;235;132m_\x1b[39m\x1b[38;2;29;246;107m/\x1b[39m\x1b[38;2;47;253;82m \x1b[39m\x1b[38;2;68;254;60m \x1b[39m\x1b[38;2;92;251;40m \x1b[39m\x1b[38;2;117;242;23m\\\x1b[39m\x1b[38;2;142;229;11m_\x1b[39m\x1b[38;2;167;212;3m_\x1b[39m\x1b[38;2;190;192;1m_\x1b[39m\x1b[38;2;211;169;3m/\x1b[39m\x1b[38;2;228;144;10m\\\x1b[39m\x1b[38;2;242;119;22m_\x1b[39m\x1b[38;2;250;94;38m_\x1b[39m\x1b[38;2;254;70;58m,\x1b[39m\x1b[38;2;253;49;81m \x1b[39m\x1b[38;2;247;30;105m/\x1b[39m\x1b[38;2;236;16;130m_\x1b[39m\x1b[38;2;221;6;156m/\x1b[39m\x1b[38;2;202;1;180m \x1b[39m\x1b[38;2;180;1;202m \x1b[39m\x1b[38;2;156;6;221m \x1b[39m\x1b[38;2;131;16;236m \x1b[39m\x1b[38;2;105;30;247m \x1b[39m\x1b[38;2;81;48;253m\x1b[39m',
  '\x1b[38;2;7;154;222m \x1b[39m\x1b[38;2;1;178;203m \x1b[39m\x1b[38;2;1;200;181m \x1b[39m\x1b[38;2;6;220;157m \x1b[39m\x1b[38;2;15;235;132m \x1b[39m\x1b[38;2;29;246;107m \x1b[39m\x1b[38;2;47;253;82m \x1b[39m\x1b[38;2;68;254;60m \x1b[39m\x1b[38;2;92;251;40m \x1b[39m\x1b[38;2;117;242;23m \x1b[39m\x1b[38;2;142;229;11m \x1b[39m\x1b[38;2;167;212;3m \x1b[39m\x1b[38;2;190;192;1m \x1b[39m\x1b[38;2;211;169;3m \x1b[39m\x1b[38;2;228;144;10m/\x1b[39m\x1b[38;2;242;119;22m_\x1b[39m\x1b[38;2;250;94;38m_\x1b[39m\x1b[38;2;254;70;58m_\x1b[39m\x1b[38;2;253;49;81m_\x1b[39m\x1b[38;2;247;30;105m/\x1b[0m',
];

module.exports = banner;
