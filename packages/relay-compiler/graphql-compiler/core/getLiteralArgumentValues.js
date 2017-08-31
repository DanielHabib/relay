/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getLiteralArgumentValues
 * @flow
 * @format
 */

'use strict';

const invariant = require('invariant');

import type {Argument} from './GraphQLIR';

// Copy of Variables type from '../../../react-relay/classic/tools/RelayTypes'
// Duplicating here rather than importing it since we can't take on a dependency
// outside of graphql-compiler.
type Variables = {[name: string]: $FlowFixMe};

function getLiteralArgumentValues(args: Array<Argument>): Variables {
  const values = {};
  args.forEach(arg => {
    invariant(
      arg.value.kind === 'Literal',
      'getLiteralArgumentValues(): Expected all args to be literals.',
    );
    values[arg.name] = arg.value.value;
  });
  return values;
}

module.exports = getLiteralArgumentValues;
